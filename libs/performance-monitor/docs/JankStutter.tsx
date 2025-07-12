/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useJankStutter } from '../src';

// 使用 antd 编写一个渲染 100 个 div 的组件、支持下拉加载更多
const Div100 = () => {
  const [list, setList] = React.useState<number[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [hasMore] = React.useState(true);
  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setList([...list, ...Array.from({ length: 100 }).map((_, index) => index + list.length)]);
      setLoading(false);
    }, 1000);
  };
  const initData = () => {
    setList(Array.from({ length: 100 }).map((_, index) => index));
  };
  React.useEffect(() => {
    initData();
  }, []);
  return <div style={{ height: 1000, overflowY: 'auto' }} onScroll={loadMore}>
    {list.map((item) => (
      <div key={item} style={{
        height: 100,
        backgroundColor: '#fef',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        cursor: 'pointer',
      }}>{item}</div>
    ))}
    {loading && <div>Loading...</div>}
    {hasMore && <div onClick={loadMore}>Load More</div>}
  </div>;
};
const JankStutter = () => {
  useJankStutter({
    deviceRefreshRate: 60,
  });
  return <div>
    <Div100 />
    <div></div>
  </div>;
};

export default JankStutter;

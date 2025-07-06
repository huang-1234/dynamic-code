import { List } from "antd";
import VirtualList from "rc-virtual-list";
import React from "react";
interface MCpsCommonGoodsListProps {
  children: React.ReactElement[];
  loadMore?: () => void;
}

const ContainerHeight = 600;
// const count = 3;
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export function MCpsCommonGoodsList(props: MCpsCommonGoodsListProps) {
  const children = props.children;
  const appendData = () => {
    return props?.loadMore?.();
  };

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      Math.abs(
        e.currentTarget?.scrollHeight -
          e.currentTarget?.scrollTop -
          ContainerHeight
      ) <= 1
    ) {
      appendData();
    }
  };

  return (
    <List>
      <VirtualList
        fullHeight={ContainerHeight}
        data={children}
        height={ContainerHeight}
        itemHeight={60}
        onScroll={onScroll}
      >
        {(item, idx: number) => {
          return (
            <div
              style={{
                margin: "0 auto",
                width: "100%",
              }}
            >
              <span>{idx}:</span>
              <span>{children?.[idx]?.key}</span>
              {children[idx]}
            </div>
          );
        }}
      </VirtualList>
    </List>
  );
}

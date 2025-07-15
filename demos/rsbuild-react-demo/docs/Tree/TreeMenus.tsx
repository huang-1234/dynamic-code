import { Tree } from 'antd';
import { buildTree, type IMenuTree } from '@/tree/array-to-tree/flat-tree'; // 根据你的接口定义

const renderTreeNodes = (nodes: IMenuTree[]) => {
  return nodes.map(node => (
    <Tree.TreeNode
      key={node.id}
      title={node.props?.title} // 节点标题
      isLeaf={!node.children?.length} // 标识叶子节点
    >
      {node.children && renderTreeNodes(node.children)} // 递归渲染子节点
    </Tree.TreeNode>
  ));
};

const MenuTree: React.FC<{ data: IMenuTree[] }> = ({ data }) => (
  <Tree showLine>{renderTreeNodes(data)}</Tree>
);

const categoryData = [
  {"id": 1, "name": "系统管理", "pid": 0, "order": 1},
  {"id": 2, "name": "用户管理", "pid": 1, "order": 1},
  {"id": 3, "name": "角色管理", "pid": 1, "order": 2},
  {"id": 4, "name": "权限配置", "pid": 3, "order": 1},
  {"id": 5, "name": "日志审计", "pid": 1, "order": 3},
  {"id": 6, "name": "操作日志", "pid": 5, "order": 1},
  {"id": 7, "name": "安全日志", "pid": 5, "order": 2},
  {"id": 8, "name": "商品中心", "pid": 0, "order": 2},
  {"id": 9, "name": "商品列表", "pid": 8, "order": 1},
  {"id": 10, "name": "商品分类", "pid": 8, "order": 2},
  {"id": 11, "name": "电子产品", "pid": 10, "order": 1},
  {"id": 12, "name": "服装", "pid": 10, "order": 2},
  {"id": 13, "name": "订单管理", "pid": 0, "order": 3},
  {"id": 14, "name": "订单列表", "pid": 13, "order": 1},
  {"id": 15, "name": "退货管理", "pid": 13, "order": 2},
  // 特殊边界场景数据
  {"id": 16, "name": "孤儿节点", "pid": 999, "order": 1},  // pid指向不存在的节点
  {"id": 17, "name": "空children节点", "pid": 12, "order": 1}, // 应无子节点
  {"id": 18, "name": "深层节点1", "pid": 11, "order": 1},
  {"id": 19, "name": "深层节点2", "pid": 18, "order": 1}, // 4级嵌套
  {"id": 20, "name": "无序节点", "pid": 1, "order": 0}  // order=0测试排序逻辑
]

export default () => {
  const data = buildTree(categoryData);
  return (
    <div>
      <MenuTree data={data} />
    </div>
  )
}
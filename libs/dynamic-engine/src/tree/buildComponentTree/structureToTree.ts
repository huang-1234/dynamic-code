import { dynamicSchema } from "./dynamic-schema";
import { ComponentItemData, PageData } from "./type";

export interface IComponentNode extends ComponentItemData {
  children?: IComponentNode[];
}

export function buildComponentTree(pageSchema: PageData) {
  // 创建节点映射表 {instanceId: node}
  const nodeMap = new Map<string, IComponentNode>();

  // 创建基础节点并存入映射表
  for (const [instanceId, nodeData] of Object.entries(pageSchema.data)) {
    nodeMap.set(instanceId, {
      ...nodeData,
    });
  }

  // 处理层级结构
  const { root, structure } = pageSchema.hierarchy;
  const treeNode: IComponentNode = nodeMap.get(root) as IComponentNode;

  // 递归构建子树
  function buildSubtree(parentId: string): IComponentNode[] {
    const childrenIds = structure[parentId] || [];
    const nodes = childrenIds
      .map((childId: string) => {
        const childNode = nodeMap.get(childId);
        if (childNode !== undefined && childNode !== null) {
          childNode["children"] = buildSubtree(childId);
          return childNode;
        }
      })
      .filter(Boolean) as IComponentNode[];
    return nodes;
  }

  // 构建整个树
  treeNode.children = buildSubtree(root);
  return {
    treeNode,
    rootNode: nodeMap.get(root) as IComponentNode,
    nodeMap,
    data: pageSchema.data,
  };
}

// 使用示例
const componentTree = buildComponentTree(dynamicSchema);
console.log(componentTree);

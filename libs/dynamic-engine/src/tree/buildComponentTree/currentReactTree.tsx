import React from "react";
import { componentMap } from "../dynamic-demo/component-map";
import { IComponentNode } from "./structureToTree";

interface IComponentNodeIteratorProps {
  rootNode: IComponentNode;
}

// 树节点渲染组件（非递归迭代方案）
export const ComponentNodeIterator = ({
  rootNode,
}: IComponentNodeIteratorProps) => {
  if (!rootNode) return <div>根节点不存在</div>;

  const stack = [];
  const result = [];

  // 初始化栈：推入根节点（深度0）
  stack.push({ node: rootNode, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;
    const { fields, children = [], instanceId, style } = node;
    const Component = componentMap[node?.name];

    // 1. 渲染当前节点
    if (Component) {
      result.push(<Component {...fields} key={instanceId} style={style} />);
    } else {
      console.warn(`未知组件: ${fields?.name}`);
    }

    // 2. 子节点入栈（反向入栈保证渲染顺序）
    if (children.length > 0) {
      children
        .slice()
        .reverse()
        .forEach((child) => {
          stack.push({ node: child, depth: depth + 1 }); // 深度+1
        });
    }
  }

  return <>{result}</>; // 反转结果保持树形顺序
};

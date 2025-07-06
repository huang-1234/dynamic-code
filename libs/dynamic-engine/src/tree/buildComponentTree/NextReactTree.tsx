import React, { useCallback, useEffect, useRef, useState } from "react";
import { componentMap } from "../dynamic-demo/component-map";
import { ReactComponent } from "./react";
import { IComponentNode } from "./structureToTree";

interface IComponentNodeIteratorProps {
  rootNode: IComponentNode;
}

interface IReactNode {
  node: IComponentNode;
  depth: number;
}

export const ComponentNodeIterator = ({
  rootNode,
}: IComponentNodeIteratorProps) => {
  const [visibleNodes, setVisibleNodes] = useState<ReactComponent[]>([]);
  // 增量渲染：分批次处理节点
  const renderIncrementally = useCallback((nodes: IReactNode[]) => {
    const batchSize = 5; // 每帧渲染50个节点
    let index = 0;

    const processBatch = () => {
      const batch = nodes.slice(index, index + batchSize);
      const newNodes = batch
        ?.filter(({ node }) => !!componentMap[node.name])
        .map(({ node, depth }) => {
          const Component = componentMap[node.name];
          const { fields, style, instanceId } = node || {};
          return <Component {...fields} key={instanceId} style={style} />;
        });

      setVisibleNodes((prev) => [...prev, ...newNodes] as ReactComponent[]);
      index += batchSize;

      if (index < nodes.length) {
        requestAnimationFrame(processBatch); // 下一帧继续渲染
      }
    };

    requestAnimationFrame(processBatch);
  }, []);

  // 计算待渲染的扁平化节点列表
  useEffect(() => {
    const stack: IReactNode[] = [{ node: rootNode, depth: 0 }];
    const flatNodes: IReactNode[] = [];

    while (stack.length) {
      const { node, depth } = stack.pop()!;
      flatNodes.push({ node, depth });
      node.children?.forEach((child) =>
        stack.push({ node: child, depth: depth + 1 })
      );
    }
    renderIncrementally(flatNodes);
  }, [rootNode]);

  return visibleNodes ? visibleNodes : <></>;
};

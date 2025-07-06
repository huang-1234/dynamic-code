import { useEffect, useState } from "react";
import { buildComponentTree } from "./structureToTree";

const createWorker = () => {
  const workerCode = `
      self.onmessage = (e) => {
        const { schema } = e.data;
        const rootNode = buildComponentTree(schema); // 树构建逻辑
        const flatNodes = flattenTree(rootNode); // 扁平化处理
        self.postMessage({ flatNodes });
      };
      
      const flattenTree = (root) => {
        const stack = [{ node: root, depth: 0 }];
        const flatNodes = [];
        while (stack.length) {
          const { node, depth } = stack.pop();
          flatNodes.push({ 
            id: node.instanceId, 
            depth,
            name: node.name,
            fields: node.fields,
            children: node.children?.length > 0
          });
          node.children?.slice().reverse().forEach(child => 
            stack.push({ node: child, depth: depth + 1 })
          );
        }
        return flatNodes;
      };
      
      ${buildComponentTree.toString()} // 注入树构建函数
    `;
  const blob = new Blob([workerCode], { type: "application/javascript" });
  return new Worker(URL.createObjectURL(blob));
};

export function useWebWorker(schema: any) {
  const [flatNodes, setFlatNodes] = useState([]);
  // 1. Web Worker异步构建树结构
  useEffect(() => {
    const worker = createWorker();
    worker.postMessage({ schema });
    worker.onmessage = (e) => {
      setFlatNodes(e.data.flatNodes);
      worker.terminate();
    };
    return () => worker.terminate();
  }, [schema]);

  return {
    flatNodes,
  };
}

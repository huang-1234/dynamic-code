import React, { useMemo } from "react";
// import { componentMap } from "../dynamic-demo/component-map";
import { componentsMap } from "./dynamic-render";
import { layoutToMargin } from "./style/adapter";
import { PageData } from "./type";

interface ComponentRendererProps extends DynamicRenderer {
  nodeId: string;
}

// 递归渲染组件树
const ComponentRenderer: React.FC<ComponentRendererProps> = ({
  nodeId,
  dynamicSchema,
}) => {
  const node = dynamicSchema.data[nodeId];

  if (!node) {
    console.warn(`Node not found: ${nodeId}`);
    return null;
  }

  const { name, fields, style } = node;
  const Component = componentsMap.get(name);

  if (!Component) {
    console.warn(`Component not found: ${name}`);
    return null;
  }

  // 获取当前节点的子节点ID列表
  const childIds = dynamicSchema.hierarchy.structure[nodeId] || [];

  const styleMerge = useMemo(() => {
    // 转换样式格式（如padding数组转字符串）
    const processedStyle = layoutToMargin(style);
    return processedStyle;
  }, [style]);

  return (
    <Component key={nodeId} {...fields} style={styleMerge}>
      {childIds.map((childId) => {
        if (childId === nodeId) {
          return null;
        }
        return (
          <ComponentRenderer
            key={childId}
            nodeId={childId}
            dynamicSchema={dynamicSchema}
          />
        );
      })}
    </Component>
  );
};

export interface DynamicRenderer {
  dynamicSchema: PageData;
  //   componentsMap: IComponentsMap;
}

// 根节点渲染器
export const DynamicTreeRenderer: React.FC<DynamicRenderer> = (
  props: DynamicRenderer
) => {
  const { dynamicSchema } = props;
  const rootNodeId = dynamicSchema.hierarchy.root;

  return (
    <ComponentRenderer nodeId={rootNodeId} dynamicSchema={dynamicSchema} />
  );
};

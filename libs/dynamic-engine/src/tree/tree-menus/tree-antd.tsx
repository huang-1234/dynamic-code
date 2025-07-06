import React, { useState } from "react";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import { buildTreeMenus, keyValueMap, MenuNode, menus } from "./tree-build";

interface TreeMenusProps {
  treeData: TreeDataNode[];
  expandedKs: React.Key[];
}
export const TreeMenus = React.memo((props: TreeMenusProps) => {
  const { treeData = [], expandedKs = [] } = props || {};
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(["0-0-0"]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand: TreeProps["onExpand"] = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue as React.Key[]);
  };

  const onSelect: TreeProps["onSelect"] = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
});

export function TreeMenusApp() {
  const [treeData, setTreeData] = React.useState<TreeDataNode[]>([]);
  React.useEffect(() => {
    setTreeData(
      buildTreeMenus<TreeDataNode>(menus, keyValueMap) as TreeDataNode[]
    );
  }, []);
  return (
    <div>
      <TreeMenus treeData={treeData} expandedKs={[]} />
    </div>
  );
}

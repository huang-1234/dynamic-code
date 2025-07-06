import type { ReactNode } from "react";
import React from "react";

interface IRootNodeProps {
  children: ReactNode;
  style?: any;
}

export const RootNode = ({ children }: IRootNodeProps) => {
  return <div>{children}</div>;
};

import React from "react";
import { componentMap } from "../dynamic-demo/component-map";
import { ComponentNodeIterator } from "./currentReactTree";
import { dynamicSchema } from "./dynamic-schema";
import { DynamicTreeRenderer } from "./FlattenedStructureTree";
import { ReactComponent } from "./react";
import { buildComponentTree, IComponentNode } from "./structureToTree";
// import { useWebWorker } from "./web-worker";

export function RenderReactWithWorker() {
  //   const { flatNodes } = useWebWorker(dynamicSchema);
}
export interface ICF {
  [k: string]: Function;
}
export const componentsMap: IComponentsMap = new Map<string, ReactComponent>();
export type IComponentsMap = Map<string, ReactComponent>;
export class DynmaicRender<CF extends ICF = ICF> {
  private rootNode: IComponentNode;
  //   componentMap = componentMap;
  private effectMap: Map<string, CF> = new Map<string, CF>();
  dynamicSchema = dynamicSchema;
  constructor() {
    const { rootNode } = buildComponentTree(dynamicSchema);
    this.rootNode = rootNode;
    // Object.keys(componentMap || {}).forEach((c: string) => {
    //   componentsMap.set(c, componentMap[c]);
    // });
  }
  //   render() {
  //     return <ComponentNodeIterator rootNode={this.rootNode} />;
  //   }
  render() {
    return <DynamicTreeRenderer dynamicSchema={this.dynamicSchema} />;
  }
  private iocEffect(ops: {
    name: string;
    Component: ReactComponent;
    effects?: CF;
    hooks?: any[];
  }) {
    const { name, Component, effects, hooks = [] } = ops || {};
    const effectProps: CF = {} as CF;
    if (effects) {
      const effectKeys = Object.keys(effects);
      effectKeys.forEach((keyItem: keyof CF) => {
        const eventEffectFn = effects[keyItem];
        // 复写默认的事件函数入参，以实现effects
        effectProps[keyItem] = function (...rest: any[]) {
          const argsFuncRest = Array.from(rest);

          const eraApis = {
            ctx: this,
          };

          return eventEffectFn(eraApis, ...argsFuncRest);
        };
      });
    }
    function IocComponent(props: any) {
      return <Component {...effectProps} {...props} />;
    }
    return React.memo(IocComponent) as ReactComponent;
  }
  registerComponent<CF extends ICF = ICF>(ops: {
    name: string;
    Component: ReactComponent;
    effects?: {
      [k: string]: (eraApis: DynmaicRender, ...rest: any[]) => any;
    };
    hooks?: any[];
  }) {
    const { name, Component, effects = {}, hooks = [] } = ops || {};
    if (!componentsMap.has(name)) {
      const WrapComponent = this.iocEffect(ops);
      componentsMap.set(name, WrapComponent);
    }
  }
  registerComponents<CF extends ICF = ICF>(
    arrayComponent: {
      name: string;
      Component: ReactComponent;
      effects: CF;
      hooks: any[];
    }[]
  ) {
    arrayComponent.forEach((comp) => {
      this.registerComponent(comp);
    });
  }
}

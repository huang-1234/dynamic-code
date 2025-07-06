import { useMemo } from "react";
import { DynmaicRender } from "./dynamic-render";
import { CpsOrderGoodsCard } from "../dynamic-demo/modules/CpsOrderGoodsCard";
import { CpsOrderStatus } from "../dynamic-demo/modules/CpsOrderStatus";
import { CommonTabsList } from "../dynamic-demo/modules/MCommonTabsList";
import { MCpsCommonGoodsList } from "../dynamic-demo/modules/MCpsCommonGoodsList";
import { RootNode } from "../dynamic-demo/modules/RootNode";

export function ReactTreeApp() {
  const dynamicNode = useMemo(() => {
    const dynamicEngine = new DynmaicRender();
    dynamicEngine.registerComponent({
      name: "infinity_root_node",
      Component: RootNode,
    });
    dynamicEngine.registerComponent({
      name: "CommonTabsList",
      Component: CommonTabsList,
      effects: {
        onChange(eraApis, k) {
          console.log("CommonTabsList", eraApis);
        },
      },
    });
    dynamicEngine.registerComponent({
      name: "CpsOrderStatus",
      Component: CpsOrderStatus,
    });
    dynamicEngine.registerComponent({
      name: "cpsCommonGoodsList",
      Component: MCpsCommonGoodsList,
    });
    dynamicEngine.registerComponent({
      name: "CpsOrderGoodsCard",
      Component: CpsOrderGoodsCard,
    });

    return dynamicEngine.render();
  }, []);
  return <>{dynamicNode}</>;
}

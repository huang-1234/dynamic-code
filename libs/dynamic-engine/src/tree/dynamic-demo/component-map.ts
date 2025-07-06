import { ICM } from "../buildComponentTree/react";
import { CpsOrderGoodsCard } from "./modules/CpsOrderGoodsCard";
import { CpsOrderStatus } from "./modules/CpsOrderStatus";
import { CommonTabsList } from "./modules/MCommonTabsList";
import { MCpsCommonGoodsList } from "./modules/MCpsCommonGoodsList";
import { RootNode } from "./modules/RootNode";
// import { scrollView } from "./modules/scrollView";

export const componentMap = {
  infinity_root_node: RootNode,
  CommonTabsList: CommonTabsList,
  //   MSearchBar: MSearchBar,
  CpsOrderStatus: CpsOrderStatus,
  cpsCommonGoodsList: MCpsCommonGoodsList,
  CpsOrderGoodsCard: CpsOrderGoodsCard,
  //   scrollView,
} as ICM;

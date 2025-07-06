import React from "react";

export enum eTagType {
  jump = "jump",
  modal = "modal",
  toast = "toast",
  modalCustom = "modalCustom",
}
export interface IAction {
  type: eTagType;
  duration?: number;
  // type === "jump"
  target?: string;
  url?: string;
  // type === "modal"
  // type === "toast"
  title: string;
  isHtml?: boolean;
  content?: string[] | string;
  btnType?: "primary" | "plain";
  btn: IAction;
  aLink: {
    title: string;
    url: string;
  };
}

interface IActionTag {
  value: number;
  label: string;
  color: string;
  action?: IAction;
}
export interface ItemOrder {
  orderId: string;
  settlementBizType: number;
  orderTag: IActionTag;
  orderTags: IActionTag[];
  orderStatus: IActionTag;
  imgUrl: string;
  itemTitle: string;
  itemPrice: string;
  promotionTags: IActionTag[];
  orderInfos: string[];
  createTime: number;
}
interface MCommonTabsListProps {
  orderId: number;
  itemTitle: string;
  style: {};
  index: number;
}

export const CpsOrderGoodsCard = (props: MCommonTabsListProps) => {
  const { orderId, itemTitle, style, index } = props;
  return (
    <div
      key={index}
      style={{
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 10,
        ...style,
      }}
    >
      <section
        style={{
          height: "100%",
          width: 200,
          backgroundColor: "#f0f",
        }}
      >
        <span>{orderId}</span>
        <span>{itemTitle}</span>
      </section>
    </div>
  );
};

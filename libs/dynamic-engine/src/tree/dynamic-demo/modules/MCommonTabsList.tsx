import React, { useState } from "react";
import { Spin, Tabs } from "antd";

const { TabPane } = Tabs;
export interface TabItem {
  value: number;
  label: string;
  color?: string;
  link?: string;
}
interface IProps {
  tabsPromotionList: TabItem[];
  tabsPromotionActiveValue: number;
  title: string;
  onChange: (item: any) => void;
}
export const CommonTabsList = (props: IProps) => {
  const { tabsPromotionList, title, onChange } = props;

  return (
    <div
      style={{
        width: 800,
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <section>
        <div>{title}</div>
      </section>

      <Tabs
        defaultActiveKey="1"
        centered
        onChange={(key: string) => {
          onChange(key);
        }}
      >
        {tabsPromotionList?.map?.((item) => {
          return (
            <TabPane
              key={Number(item.value)}
              tab={item.label}
              style={{
                color: item.color,
              }}
            >
              {item.label}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

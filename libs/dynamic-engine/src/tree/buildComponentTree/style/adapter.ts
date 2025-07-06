import { getStyle } from "./style";
import type { IEraComponent, IBoxStyle, IFEStyle, IStyles } from "./types";

export function getRemStyle(
  styleLocal: IBoxStyle,
  _rem?: (v: number) => number
) {
  const styleMap = styleLocal || ({} as IBoxStyle);
  if (typeof _rem === "function") {
    Object.keys(styleLocal || {})?.forEach((k) => {
      styleMap[k] = _rem(Number(styleLocal[k]));
    });
  } else {
    Object.keys(styleLocal || {})?.forEach((k) => {
      styleMap[k] = styleLocal[k];
    });
  }
  return styleMap;
}

// [cb] 格式化数据中的 style 字段
export function formatDataStyle<IC extends IEraComponent = IEraComponent>(
  eraSchemaData: Record<string, IC>,
  _rem?: (v: number) => number
) {
  const newData: Record<string, IEraComponent> = {};
  Object.keys(eraSchemaData || {}).map((key) => {
    const currentComponent = eraSchemaData[key];
    newData[key] = { ...currentComponent };
    newData[key].fields = newData?.[key]?.fields || {};
    const styleFields = newData?.[key]?.fields?.style || {};
    const { layout, ...localStyle } = newData?.[key]?.style || ({} as IFEStyle);
    const styleLocal: IBoxStyle = getStyle(layout as IStyles) as IBoxStyle;
    const schemaStyle = getRemStyle(styleLocal, _rem) as IFEStyle;
    newData[key].style = Object.assign(localStyle, schemaStyle, styleFields);
  });
  return newData;
}
// [ce]

export function layoutToMargin(style: IFEStyle, _rem = (v: number) => v) {
  const { layout, ...localStyle } = style || ({} as IFEStyle);
  const styleLocal: IBoxStyle = getStyle(layout as IStyles) as IBoxStyle;
  const schemaStyle = getRemStyle(styleLocal, _rem) as IFEStyle;
  return Object.assign(localStyle, schemaStyle);
}

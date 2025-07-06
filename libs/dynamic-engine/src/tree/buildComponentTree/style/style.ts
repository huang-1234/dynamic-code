import type { IBoxStyle, IStyles, LayoutConfig } from "./types";

function filterNull(originStyle: IStyles): IStyles {
  const filterNullStyle = Object.keys(originStyle)
    ?.filter(
      (key) => originStyle[key] !== null && originStyle[key] !== undefined
    )
    ?.reduce?.((acc, key) => ({ ...acc, [key]: originStyle[key] }), {});
  return filterNullStyle;
}

function generateLayoutConfig(
  layoutConfig: LayoutConfig,
  suffix: string
): IBoxStyle {
  const tempStyles = {} as IBoxStyle;
  if (layoutConfig && layoutConfig.length > 0) {
    tempStyles[`${suffix}Top`] = layoutConfig?.[0];
    tempStyles[`${suffix}Right`] = layoutConfig?.[1];
    tempStyles[`${suffix}Bottom`] = layoutConfig?.[2];
    tempStyles[`${suffix}Left`] = layoutConfig?.[3];
  }
  return { ...tempStyles };
}

function generateBorderRadius(layoutConfig: LayoutConfig): IBoxStyle {
  const tempStyles = {} as IBoxStyle;
  if (layoutConfig && layoutConfig.length > 0) {
    tempStyles[`borderTopLeftRadius`] = layoutConfig?.[0];
    tempStyles[`borderTopRightRadius`] = layoutConfig?.[1];
    tempStyles[`borderBottomRightRadius`] = layoutConfig?.[2];
    tempStyles[`borderBottomLeftRadius`] = layoutConfig?.[3];
  }
  return { ...tempStyles };
}

/**
 * @deprecated 不建议使用，全量信息可能会导致渲染出错
 * @param styleConfig 端到端协议中的style,获取方式props.style
 * @returns 返回所有信息，包含原本的标识。
 */
export function getAllStyle(styleConfig: IStyles): IStyles {
  const newStyle = Object.assign(
    {},
    { ...styleConfig },
    generateLayoutConfig(styleConfig?.parentPadding as LayoutConfig, "margin"),
    generateBorderRadius(styleConfig?.radius as LayoutConfig),
    generateLayoutConfig(styleConfig?.margin as LayoutConfig, "margin"),
    generateLayoutConfig(styleConfig?.padding as LayoutConfig, "padding"),
    {
      height: styleConfig?.height ?? null,
      backgroundColor: styleConfig?.backgroundColor?.[0] ?? null,
    }
  );

  return filterNull(newStyle);
}

/**
 *
 * @param styleConfig 端到端协议中的style,获取方式props.style
 * @returns 目前包含margin，borderRadius的信息
 */
export function getStyle(styleConfig?: IStyles): IBoxStyle {
  const newStyle = Object.assign(
    {},
    generateLayoutConfig(styleConfig?.parentPadding as LayoutConfig, "margin"),
    generateBorderRadius(styleConfig?.radius as LayoutConfig),
    generateLayoutConfig(styleConfig?.margin as LayoutConfig, "margin"),
    generateLayoutConfig(styleConfig?.padding as LayoutConfig, "padding"),
    {
      height: styleConfig?.height ?? null,
      backgroundColor: styleConfig?.backgroundColor?.[0] ?? null,
    }
  );
  return filterNull(newStyle);
}

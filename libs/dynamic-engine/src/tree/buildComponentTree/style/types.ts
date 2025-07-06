export interface IStyles {
  spanPadding?: LayoutConfig;
  radius?: LayoutConfig;
  margin?: LayoutConfig;
  padding?: LayoutConfig;
  parentPadding?: LayoutConfig;
  allowMounting?: boolean;
  showShadow?: boolean;
  hideFooter?: boolean;
  span?: number;
  isNest?: boolean;
  disableScroll?: boolean;
  [boxStyleKey: string]: any;
}

export type LayoutConfig = [number, ...number[]] & { length: 4 };
export type IBoxStyle = Record<string, number>;

export interface IFEStyle {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;

  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;

  borderRadiusTop?: number;
  borderRadiusRight?: number;
  borderRadiusBottom?: number;
  borderRadiusLeft?: number;
  // origin style
  layout?: IStyles;
}

export interface IEraComponent {
  name: string;
  style: IFEStyle;
  fields?: Record<string, any>;
}

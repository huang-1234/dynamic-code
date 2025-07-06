import type {
  Component,
  ComponentState,
  FunctionComponent,
} from "react";
type TString = string;
export declare type ReactComponent<
  P = any,
  T extends Component<P, ComponentState> = Component<P, ComponentState>
> = FunctionComponent<P> | Component<P, T>;
export declare type IComponentMap<
  P = any,
  T extends Component<P, ComponentState> = Component<P, ComponentState>,
  CK extends TString = TString
> = Record<CK, ReactComponent<P, T>>;
export declare type ICM<
  P = any,
  T extends Component<P, ComponentState> = Component<P, ComponentState>,
  CK extends string = string
> = IComponentMap<P, T, CK>;
export declare type ReactComponentDefault = ReactComponent<
  any,
  Component<any, any, any>
>;
export {
  Component,
  ComponentState,
  FunctionComponent,
};

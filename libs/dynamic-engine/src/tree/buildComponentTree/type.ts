type TAny = any;
export interface IElementPackage {
  action2: string;
  params?: TAny;
  [k: string]: TAny;
}
export declare type IEraAreas = Record<
  string,
  {
    element_package?: IElementPackage;
    content_package?: {};
  }
>;
export interface IEventTask {
  autoReport?: boolean;
  element_package?: IElementPackage;
  content_package?: {};
  areas: IEraAreas;
}
export interface TrackData {
  module?: {
    element_package?: IElementPackage;
    content_package?: {};
  };
  click_event?: IEventTask;
  show_event?: IEventTask;
  task_event?: IEventTask;
}
export interface ComponentItem {
  name: string;
  renderType: string;
  type: string;
  ver: number;
  bundleUrl: string;
  downgradeName: string;
  umdName?: string;
  cid: number;
}
export interface ComponentItemData<F extends {} = {}> {
  instanceId?: string;
  componentInstanceKey?: string | number; // delete
  name: string;
  uuid?: number;
  cid?: number; // delete
  version?: number;
  track?: TrackData;
  strategy?: "append" | "overwrite";
  status?: string;
  style: TAny;
  submit?: boolean;
  fields: F & {
    [k: string]: TAny;
  };
  /**
   * @TODO:
   */
  engineConfig: {};
}
export interface GlobalData {
  pageName?: string;
  pageVersion?: number;
  commonData?: TAny;
  bizData?: TAny;
  protocolVersion?: number;
  track?: {
    moduleNameExt?: string;
    autoReport?: boolean;
    url_package?: {
      page2?: string;
      params?: TAny;
    };
  };
  [key: string]: TAny;
}
export interface PageData {
  component: ComponentItem[];
  hierarchy: {
    root: string;
    structure: Record<string, string[]>;
  };
  data: Record<string, ComponentItemData>;
  global: GlobalData;
  reload?: boolean;
  subPage?: PageData;
}

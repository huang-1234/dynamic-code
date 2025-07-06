import { ComponentItemData } from "../buildComponentTree/type";
export enum eStrategy {
  hidden = "hidden",
  overwrite = "overwrite",
  append = "append",
  custom = "custom",
}

/**
 * @desc 组件函数effects解析后的兼容APIProps
 */
export interface IEraApis<
  State extends {} = {},
  Action extends Record<string, Function> = {}
> {
  component: any;
  componentUid: string;
  componentData: ComponentItemData;
  componentFields: Record<string, any>;
  ctx: any;
}

export interface IParams {
  cpsType?: any;
  pcursor?: number;
}
export const pcursorDefault = "0";
export const initialState = {
  a: 1,
  loading: false,
};

function setKeyword(eraApi: IEraApis<typeof initialState>, keyword?: string) {
  eraApi.ctx?.setComponentDefaultProps?.({
    keyword: keyword,
  });
}

export const appendList = async (eraApi: IEraApis<{}>, params: any) => {
  return refreshPage(eraApi, params);
};

export function refreshPage(
  eraApi: IEraApis<{}>,
  params: IParams,
  strategy?: any
) {
  const { ctx, componentUid: uid } = eraApi || {};
  const { ...restParams } = params || {};
  const { hasMore, orderStatusProps, keyword, ...prePars } =
    ctx.getComponentDefaultProps?.() || {};
  const parsReq = {
    ...prePars,
    ...restParams,
    keyword,
  };
  ctx
    .sendAsync((data) => {
      return {
        ...parsReq,
        pcursor: parsReq?.pcursor,
        strategy: strategy,
      };
    }, uid)
    .then((res) => {});
}

export const compMapEffects = {
  CommonTabsList: {
    // [cb] 代码块描述... 推广类型切换
    methodPromotion: (eraApi: IEraApis<{}>, key: number) => {
      const { ctx } = eraApi || {};

      const { cpsType } = ctx.getComponentDefaultProps() || {};
      if (cpsType === key) {
        return;
      }
      ctx.setComponentDefaultProps({
        cpsType: key,
        keyword: undefined,
      });
      const params = {
        cpsType: Number(key),
        pcursor: pcursorDefault,
        keyword: undefined,
      };
      return refreshPage(eraApi, params, eStrategy.overwrite);
    },
    // [ce]
  },
  MSearchBar: {
    // [cb] 代码块描述... 搜索
    onSearch: (eraApi: IEraApis<typeof initialState>, keyword: string) => {
      const _keyword = keyword?.trim();
      setKeyword(eraApi, _keyword);
      const params = {
        keyword: _keyword,
        pcursor: pcursorDefault,
      };
      return refreshPage(eraApi, params, eStrategy.overwrite);
    },
    // [ce]
  },

  CpsOrderStatus: {
    // [cb] 代码块描述... 订单状态切换
    methodOrderStatus: (
      eraApi: IEraApis<typeof initialState>,
      currentTab: any
    ) => {
      const { ctx } = eraApi || {};
      const { orderStatusProps, keyword } =
        ctx.getComponentDefaultProps() || {};
      if (orderStatusProps === currentTab?.value) {
        return;
      }
      ctx.setComponentDefaultProps({
        orderStatusProps: currentTab?.value,
        keyword,
      });
      const params = {
        pcursor: pcursorDefault,
      };
      return refreshPage(eraApi, params, eStrategy.overwrite);
    },
    // [ce]
  },
  cpsCommonGoodsList: {
    // [cb] 代码块描述... 加载更多
    loadMore: async (eraApi: IEraApis) => {
      const { ctx } = eraApi || {};
      const { commonData } = ctx.getGlobalData() || {};
      return await appendList(eraApi, {
        pcursor: commonData?.pcursor,
      });
    },
    // [ce]
    // [cb] 代码块描述... 判断时候还有更多数据需要加载
    getHasMore({ ctx }: IEraApis) {
      const { commonData } = ctx.getGlobalData() || {};
      const hasMore = commonData?.pcursor && commonData?.pcursor !== "no_more";
      return hasMore;
    },
    // [ce]
  },
  scrollView: {
    // [cb] 代码块描述... 加载更多
    loadMore: async (eraApi: IEraApis) => {
      const { ctx } = eraApi || {};
      const { commonData } = ctx.getGlobalData() || {};
      return await appendList(eraApi, {
        pcursor: commonData?.pcursor,
      });
    },
    // [ce]
    // [cb] 代码块描述... 判断时候还有更多数据需要加载
    getHasMore({ ctx }: IEraApis) {
      const { commonData } = ctx.getGlobalData() || {};
      const hasMore = commonData?.pcursor && commonData?.pcursor !== "no_more";
      return hasMore;
    },
    // [ce]
  },
  CpsOrderGoodsCard: {
    refreshPage: refreshPage,
  },
};

export default compMapEffects;
export type EffectsMapType = typeof compMapEffects;

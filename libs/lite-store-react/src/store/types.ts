import  { type FC, type ReactNode } from 'react';
import  { type Draft } from 'immer';

export type Selector<State> = (nextState: State) => any[] | boolean;
export type SelectorSetter<State> = (selector: Selector<State>) => void;

export type Dispatcher<Action extends Record<string, Function>> = {
  [k in keyof Action]: Action[k];
};

export type Updater = () => void;

export type IDefReducer = Record<string, any>;

export interface ISubscriber<State> {
  selector: SelectorSetter<State>;
  ContextProvider: FC<{ children: ReactNode }>;
  updater: Updater;
  dirty: boolean;
}

export interface ILiteStoreInstance<State, Action extends Record<string, Function>> {
  state: IRef<State>;
  action: Dispatcher<Action>;
  subscriber: Array<ISubscriber<State> | null>;
  dirty: number | null;
}

export interface ILiteStoreAPI<State, Action extends Record<string, Function>> {
  state: State;
  action: Dispatcher<Action>;
  selector: SelectorSetter<State>;
  ContextProvider: FC<{ children: ReactNode }>;
}

export type InitialValue<T> = () => T;

export type ReducerCaller<P> = (payload: P) => {
  sync: () => void;
};

export type Produce<State> = (draft: Draft<State>) => void;

export type CombineReducerCaller<State, ReducersType> = {
  [k in keyof ReducersType]: ReducerCaller<ReducersType[k]>;
} & {
  /**
   * @desc setState 函数
   * @summary 两种更新方法都会改变原始对象的地址，但是第二种方法可以避免不必要的渲染。
   * @see 这里使用 immer 的 produce 来实现不可变数据结构处理作为全量state的更新优化：https://immerjs.github.io/immer/zh-CN/
   * @template 使用方式一 setState({ count: state.count + 1 })
   * @template 使用方式二 setState(draft => ({ draft.count += 1 }))
   * @param state
   * @returns
   */
  setState: (
    newState: Partial<State> | Produce<State>,
    displayName?: string,
  ) => {
    /**
     * @desc 同步更新
     * @returns
     */
    sync: () => void;
  };
};

export type CombineReducer<State extends IDefReducer, ReducersType> =
  | ((state: State) => { [k in keyof ReducersType]: Reducer<State, ReducersType[k]> } & {
      setState: (newState: Partial<State>) => void;
    })
  | ((state: State) => {
      setState: (newState: Partial<State>) => void;
    });

export type Reducer<State extends IDefReducer, P> = (payload: P) => State;
export type Reducers<State extends IDefReducer, R extends Record<string, any>> = (state: State) => {
  [k in keyof R]: Reducer<State, R[k]>;
};
/**
 * @summary action 函数
 */
export type Actions<State, Action extends Record<string, Function>, ReducerType> = (
  /**
   * @desc 更新 store 状态的公共 reducer
   */
  reducer: CombineReducerCaller<State, ReducerType>,
  /**
   * @desc 获取 store 状态
   */
  getState: () => State,
  /**
   * @desc 返回 所有的 action
   */
) => Action;

export interface IRef<State> {
  current: State;
}

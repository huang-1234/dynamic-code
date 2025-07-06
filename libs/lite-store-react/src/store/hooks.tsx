import { useRef, useState, useEffect, useMemo, useContext, ComponentType, ReactElement } from 'react';
import type { LiteStoreContractor } from './core';
import type { IDefReducer, ILiteStoreAPI, Selector } from './types';
import { Compose } from './utils';

const usePropsChanged = (callback: () => void, deps: any[]) => {
  const oldDeps = useRef(deps);
  if (oldDeps.current?.some?.((it, i) => !Object.is(it, deps[i]))) {
    callback();
  }
};

export const useStore = <
  State extends IDefReducer,
  Action extends Record<string, Function>,
  Reducer extends IDefReducer,
>(
  liteStore: LiteStoreContractor<State, Action, Reducer>,
): ILiteStoreAPI<State, Action> => {
  const [instanceIndex] = useState(liteStore.instance?.length);

  usePropsChanged(() => {
    console.warn('Store instance has been changed, which may cause some unknown error.');
  }, [liteStore, instanceIndex]);

  const store = liteStore.useInstance(instanceIndex);

  // @ts-ignore
  if (typeof module !== 'undefined' && module.hot) {
    useEffect(() => {
      return () => {
        liteStore.destroyInstance(instanceIndex);
      };
    }, []);
  } else {
    useEffect(() => {
      return () => {
        liteStore.destroyInstance(instanceIndex);
      };
    }, [liteStore, instanceIndex]);
  }

  return store;
};

export const useContextStore = <
  State extends IDefReducer,
  Action extends Record<string, Function>,
  Reducer extends IDefReducer,
>(
  liteStore: LiteStoreContractor<State, Action, Reducer>,
): ILiteStoreAPI<State, Action> => {
  const instanceIndex = useContext(liteStore.instanceContext);

  usePropsChanged(() => {
    console.warn('Store instance has been changed, which may cause some unknown error.');
  }, [liteStore, instanceIndex]);

  if (instanceIndex === -1) {
    console.warn('Can not found store instance, creating.');
    return useStore(liteStore);
  }
  return liteStore.useLiteStoreAPI(instanceIndex);
};

type UseStoreProvider = (
  ...liteStores: Array<LiteStoreContractor<any, any, any>>
) => ComponentType;

export const useStoreProvider: UseStoreProvider = (...liteStores) => {
  usePropsChanged(() => {
    console.warn('Imported Store has been changed, which may cause some unknown error.');
  }, liteStores);

  const Providers = liteStores.map((liteStore) => {
    const { ContextProvider, selector } = useStore(liteStore);
    useMemo(() => {
      selector(() => false);
    }, [selector]);
    return ContextProvider;
  });

  return useMemo(() => {
    return Compose(...Providers);
  }, Providers);
};

export const useMemoStore =
  <State extends IDefReducer, Action extends Record<string, Function>, Reducer extends IDefReducer>(
    liteStore: LiteStoreContractor<State, Action, Reducer>,
    ContextProvider?: ComponentType<{ children: ReactElement }>
  ) =>
    (
      render: (state: State) => ReactElement,
      selector: Selector<State>,
    ): ComponentType => {
      const Children = useMemo(
        () => () => {
          const store = useContextStore(liteStore);
          useMemo(() => store.selector(selector), [selector]);
          return render(store.state);
        },
        [liteStore],
      );
      if (ContextProvider) {
        return useMemo(
          () => () =>
          (
            <ContextProvider>
              <Children />
            </ContextProvider>
          ),
          [liteStore, Children],
        );
      }
      return Children;
    };

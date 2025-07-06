/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useContextStore, createStoreWithoutReducer, IDefReducer, useStoreProvider } from '../../src';
import { Button, Spin, Switch } from 'antd';

export const initialState = {
  count: 0,
  loading: false,
};

export const eraStore = createStoreWithoutReducer(
  () => initialState,
  (reducer, getState) => ({
    setInitialState(props: IDefReducer) {
      reducer.setState((draft: IDefReducer) => {
        Object.keys(props).forEach((key) => {
          draft[key] = props[key];
        });
        return draft;
      });
    },
    getInitialState() {
      return getState();
    },
    add() {
      reducer.setState((draft) => {
        draft.count = draft.count + 1;
        return draft;
      });
    },
    sub(c?: number) {
      const { count } = getState();
      const _c = c ?? count;
      reducer.setState({
        count: _c - 1,
      });
    },
    double(c?: number) {
      reducer.setState((state) => {
        const { count } = state;
        const _c = c ?? count;
        return {
          count: _c * 2,
        }
      });
    },
    half(c?: number) {
      const { count } = getState();
      const _c = c ?? count;
      reducer.setState({
        count: _c / 2,
      });
    },
    loadingTrigger(l?: boolean) {
      reducer.setState((draft) => {
        draft.loading = l ?? !draft.loading;
        return draft;
      });
    },
  }),
);

export function ContextStoreProvider({ children }: any) {
  const StoreProvider: React.ComponentType<{ children: React.ReactNode }> = useStoreProvider(
    eraStore,
  ) as React.ComponentType<{ children: React.ReactNode }>;
  return <StoreProvider>{children}</StoreProvider>;
}

const styleMargin = {
  marginRight: 10,
};

const ChildrenOne = () => {
  const { state, action, selector } = useContextStore(eraStore);
  selector((s) => [s.count, s.loading]);
  useEffect(() => {
    let timer: any;
    if (state.loading) {
      timer = setTimeout(() => {
        action.loadingTrigger(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    }
  }, [state.loading]);

  return (
    <>
      <div>
        <h2>ChildrenOne state.loading 会触发渲染</h2>
        <Switch
          onChange={(v) => {
            action.loadingTrigger(v);
          }}
          checked={state.loading}
          style={styleMargin}
        />
        <Spin spinning={state.loading}>
          <ActionComp />
        </Spin>
      </div>
    </>
  );
};

function ActionComp() {
  const { state, action } = useContextStore(eraStore);

  return (
    <>
      <span style={styleMargin}>count: {state.count}</span>
      <Button
        style={styleMargin}
        onClick={() => {
          action.add();
        }}
      >
        add
      </Button>
      <Button
        style={styleMargin}
        onClick={() => {
          action.sub();
        }}
      >
        sub
      </Button>
      <Button
        style={styleMargin}
        onClick={() => {
          action.loadingTrigger();
        }}
      >
        loadingTrigger
      </Button>

      <Button
        style={styleMargin}
        onClick={() => {
          action.double();
        }}
      >
        double
      </Button>
      <Button
        style={styleMargin}
        onClick={() => {
          action.half();
        }}
      >
        half
      </Button>
    </>
  );
}

/**
 * div: loading
 * div: count
 * div.onClick = add()
 * div.onClick = sub()
 * @returns
 */
const ParentComp = () => {
  const { state, selector } = useContextStore(eraStore);
  selector((s) => [s.count]);
  return (
    <div>
      <h2>ParentComp state.loading 不会触发渲染</h2>
      <Switch checked={state.loading} style={styleMargin} />
      <ActionComp />
    </div>
  );
};

const ParentContext = () => {
  return (
    <ContextStoreProvider>
      <ParentComp></ParentComp>
      <ChildrenOne></ChildrenOne>
    </ContextStoreProvider>
  );
};

function App(props: any) {
  return <ParentContext />;
}

export default App;

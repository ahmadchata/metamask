import { useMemo } from "react";
import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { CONNECT_POP_UP_STATE } from "../actions/action-types/action-names";

interface InitialState {
  connectPopupState: boolean;
}

interface Action {
  type: string;
}

let store: Store;

const initialState: InitialState = {
  connectPopupState: false,
};

const reducer = (
  state: InitialState = initialState,
  action: Action
): InitialState => {
  if (action.type === CONNECT_POP_UP_STATE) {
    return {
      ...state,
      connectPopupState: !state.connectPopupState,
    };
  } else {
    return state;
  }
};

const initStore = (preloadedState?: InitialState): Store => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};

export const initializeStore = (preloadedState?: InitialState): Store => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    // Reset the current store
    store = undefined!;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: InitialState): Store {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

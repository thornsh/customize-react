import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

function customizeRedux(modules) {
  let store;
  let rootReducer = {};

  Object.keys(modules).forEach((key) => {
    const module = modules[key];
    const { namespace, reducers, effects } = module;

    const reducerMap = Object.keys(reducers).reduce((pre, reducer) => {
      pre[`${namespace}/${reducer}`] = reducers[reducer];
      return pre;
    }, {});

    const effectMap = Object.keys(effects).reduce((pre, effect) => {
      pre[`${namespace}/${effect}`] = effects[effect];
      return pre;
    }, {});

    const currentState = module.state;

    const reducer = (state = currentState, action) => {
      let result = state;
      const effectFn = effectMap[action.type];
      if (effectFn) {
        const effectArguments = {
          getCurrentState(key) {
            let st = store.getState();
            let res = st[action.type.slice(0, action.type.indexOf("/"))];
            return res[key];
          },
        };
        Object.setPrototypeOf(effectArguments, store);

        //
        Promise.resolve().then(() => {
          effectFn(action, effectArguments);
        });
        return result;
      }

      const reducerFn = reducerMap[action.type];
      if (reducerFn) {
        result = reducerFn(state, action);
      }
      return result;
    };
    rootReducer[module.namespace] = reducer;
  });

  store = createStore(
    combineReducers(rootReducer),
    composeWithDevTools()
  )

  return store;
}

export default customizeRedux;

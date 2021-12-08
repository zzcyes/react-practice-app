import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducer";

const composedEnhancer = applyMiddleware(thunkMiddleware);

// 利用 Redux API 创建一个 Store，参数就是 Reducer
const store = createStore(rootReducer, composedEnhancer);

// Store 提供了 subscribe 用于监听数据变化
store.subscribe(() => console.log(store.getState()));

export default store;

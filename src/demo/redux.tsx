import React, { memo, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  InitialState,
  incrementAction,
  decrementAction,
} from "../store/reducer";

function fetchData() {
  return (dispatch: any) => {
    dispatch({ type: "FETCH_DATA_BEGIN" });
    fetch("https://www.baidu.com")
      .then((res) => {
        console.log("FETCH_DATA_SUCCESS", res);
        setTimeout(() => {
          dispatch({
            type: "FETCH_DATA_SUCCESS",
            data: "{data:'请求成功了！'}",
          });
        }, 1500);
      })
      .catch((err) => {
        console.log("FETCH_DATA_FAILURE", err);
        dispatch({ type: "FETCH_DATA_FAILURE", error: err.toString() });
      });
  };
}

function Rudux() {
  const [cacheStep, setCacheStep] = useState<number>(1);
  const [step, setStep] = useState<number>(1);
  // 绑定到 state 的变化
  const count = useSelector((state: InitialState) => state.value);
  const data = useSelector((state: InitialState) => state.data);
  const pending = useSelector((state: InitialState) => state.pending);
  const error = useSelector((state: InitialState) => state.error);
  // 获得当前 store 的 dispatch 方法
  const dispatch = useDispatch();

  function RenderDataList() {
    let text = data;
    // 根据 state 显示不同的状态
    if (error) {
      text = error;
    } else if (pending) {
      text = "Loading...";
    }
    return <div>结果：{text}</div>;
  }

  const handleStartFetch = useCallback(() => {
    if (!pending) {
      dispatch(fetchData());
    }
  }, [dispatch, pending]);

  // 在按钮的 click 时间中去分发 action 来修改 store
  return (
    <div>
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => dispatch({ ...incrementAction, step })}>
          +
        </button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={() => dispatch({ ...decrementAction, step })}>
          -
        </button>
        <div style={{ marginTop: 10 }}>
          current step: {step}
          <div>
            setting step:
            <input
              style={{ marginLeft: 10, width: 100 }}
              onChange={(e) => {
                setCacheStep(Number(e.target.value) || 1);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setStep(cacheStep);
                }
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <p>
          异步 Action 并不是一个具体的概念，而可以把它看作是 Redux
          的一个使用模式。它通过组合使用同步 Action
          ，在没有引入新概念的同时，用一致的方式提供了处理异步逻辑的方案。
        </p>
        <button onClick={handleStartFetch}>start</button>
        <span style={{ margin: "0 10px" }}>
          <RenderDataList />
        </span>
      </div>
    </div>
  );
}

export default memo(Rudux);

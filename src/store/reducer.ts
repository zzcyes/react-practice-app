export const counter = {
  INCREMENTED: "counter/incremented",
  DECREMENTED: "counter/decremented",
};

export interface InitialState {
  value: number;
  data: any;
  pending: boolean;
  error: any;
}

const { INCREMENTED, DECREMENTED } = counter;

export interface Action {
  type: string;
  [key: string]: any;
}

// store初始值
export const initialState: InitialState = {
  value: 0,
  data: null,
  pending: false,
  error: null,
};

// action
export const incrementAction = { type: INCREMENTED };

// action
export const decrementAction = { type: DECREMENTED };

// Reducer，处理 Action 返回新的 State
export function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENTED:
      return { ...state, value: state.value + (action.step || 1) };
    case DECREMENTED:
      return { ...state, value: state.value - (action.step || 1) };
    case "FETCH_DATA_BEGIN":
      return {
        ...state,
        pending: true,
        //  data: null,
        //  error: null
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        pending: false,
        data: action.data,
        // error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        pending: false,
        // data: null,
        error: action.error,
      };
    default:
      return state;
  }
}

// function fetchData() {
//   return (dispatch) => {
//     dispatch({ type: "FETCH_DATA_BEGIN" });
//     fetch("/some-url")
//       .then((res) => {
//         dispatch({ type: "FETCH_DATA_SUCCESS", data: res });
//       })
//       .catch((err) => {
//         dispatch({ type: "FETCH_DATA_FAILURE", error: err });
//       });
//   };
// }

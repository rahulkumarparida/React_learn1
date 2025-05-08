import {  useReducer } from "react";
import { useLocation } from "react-router-dom";

export default function CounterByReducer() {
// useLocation access the states sent by the useNavigate function on a diffrent Component / Parent Component. Also we use the empty object after accessing the location so that in case the user login without any credential it stays as default
let location = useLocation() ;
const {userName }=location.state || { userName : "Guest"};

  function handleChange(e) {
    console.log(e.target.value);

    setCount(e.target.value);
  }
  let [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 }); // 0 is the initialstate
  function reducer(state, action) {
    console.log("called");
    console.log(action.payload);

    if (action.type == "INCEREASE") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type == "DECREASE") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "RESET") {
      return { ...state, count: (state.count = 0) };
    }
    if (action.type == "INCREMENTBY") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <>
    <h1>Counter by {userName}</h1>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "INCREMENTBY", payload: Number(e.target.value) });
        }}
      />
      <div>
        <h1>{state.count}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "INCEREASE" });
          }}
        >
          INCEREASE
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREASE" });
          }}
        >
          DECREASE
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          RESET
        </button>
      </div>
      <div></div>
    </>
  );
}

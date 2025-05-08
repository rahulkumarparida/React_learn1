import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hello(props) {
  let [userName, setUserName] = useState("");
  // useNavigate() is used to redierect to page after a certain event has occurred  it takes the path and a state as params whic can be later used to destrucuture and display
  let navigate = useNavigate();
  function Handleclick() {
    navigate("/Effect/CounterByReducer", { state: { userName } });
  }
  return (
    <>
      <h1>
        Hello from {props.UserData.name} Components !! {props.UserData.age}
      </h1>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={userName}
      />
      <button
        onClick={() => {
          Handleclick();
        }}
      >
        Go to the Effect Reducer Page
      </button>
    </>
  );
}

export default Hello;

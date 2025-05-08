import { useContext, useState } from "react";
import { userContext } from "../Context/UserContext";

export default function LoginContext() {
  let [value, setValue] = useState({ Name: "", Age: "", College: "" });
  let { dispatch } = useContext(userContext);
  function handleChange(e) {
    e.preventDefault();
    
    dispatch({ type: "Login", payload: value });
    setValue({ Name: "", Age: "", College: "" });
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setValue({ ...value, Name: e.target.value });
          }}
          value={value.Name}
        />
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => {
            setValue({ ...value, Age: e.target.value });
          }}
          value={value.Age}
        />
        <input
          type="text"
          placeholder="College"
          onChange={(e) => {
            setValue({ ...value, College: e.target.value });
          }}
          value={value.College}
        />
        <button type="Sumbit">Login</button>
      </form>
    </div>
  );
}

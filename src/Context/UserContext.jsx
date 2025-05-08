import { createContext, useReducer, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

let userContext = createContext();

function UserContextProvider({ children }) {
  // let [user , setUser] = useState({}) // use useReducer hook

  let [set, data] = useLocalStorage();

  let [state, dispatch] = useReducer(Reducer, {});
  function Reducer(state, action) {
    if ((action.type = "Login")) {
      // console.log("State : ", action.payload);

      set("LoginData", action.payload );

      return (state = action.payload);
    }

    if ((action.type = "Logout")) {
      return (state = action.payload);
    }
  }
  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export { userContext, UserContextProvider };

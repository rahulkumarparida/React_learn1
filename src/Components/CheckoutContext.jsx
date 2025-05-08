import { useContext, useState } from "react";
import { userContext } from "../Context/UserContext";
import useLocalStorage from "../Hooks/useLocalStorage";

export default function CheckoutContext() {

  let { state } = useContext(userContext);

  return (
    <div>
      <h1> Checkout Context</h1>
      <p>Name : {state.Name}</p>
      <p>Age : {state.Age}</p>
      <p>College : {state.College}</p>
    </div>
  );
}

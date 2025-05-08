import { useEffect, useState } from "react";

export default function useLocalStorage() {
  let [data, setData] = useState(() => {
    get("LoginData") || "BANADDD";
  });
  function set(key, val) {
    // console.log("Key : ", key, " Value : ", val);
  
    localStorage.setItem(key, JSON.stringify(val));
  
  }
  function get(key) {
    let Value = localStorage.getItem(key);
    // console.log("Banda");
    return Value;
  }
  function remove(key) {
    console.log(key);
    localStorage.removeItem(key);
  }

  return [set, get, remove , data , setData];
}

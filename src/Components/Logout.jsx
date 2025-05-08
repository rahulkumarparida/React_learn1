import { useContext } from "react";
import { userContext } from "../Context/UserContext";
import useLocalStorage from "../Hooks/useLocalStorage";

export default function Logout() {
  let { dispatch } = useContext(userContext);
//  let [remove] = useLocalStorage();
// remove("LoginData")
 return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "Logout",
            payload: { Name: "Guest", Age: "NA", College: "NA" },
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}

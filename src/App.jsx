import Nav from "./Components/Nav";
import "./App.css";
import CheckoutContext from "./Components/CheckoutContext";
import LoginContext from "./Components/LoginContext";
import { UserContextProvider } from "./Context/UserContext";
import Logout from "./Components/Logout";
import useDisplayMessage from "./Hooks/useDisplayMessage";

function App() {
  // let [msg,displayMsg] = useDisplayMessage()
  // let val = "This is the custom message passed through the function "
//  let cusMsg = displayMsg(val);
  return (
    <>
      <h1>Hello World</h1>
      <p>Below are the Routes</p>
      {/* <p>{msg}</p>
      <p>{cusMsg}</p> */}
      <Nav />
      <UserContextProvider>
        <LoginContext />
        <Logout />
        <CheckoutContext />
      </UserContextProvider>
    </>
  );
}

export default App;

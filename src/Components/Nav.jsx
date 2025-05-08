import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Fruits from "./Fruits";
import Hello from "./Hello";

import ConditionalCmpnt from "./ConditionalCmpnt";
import Message from "./Message";
import Counter from "./Counter";
import Colors from "./Color";
import Form from "./From";
import Effect from "./Effect";
import CounterByReducer from "./CounterByReducer";
import PageNa from "./PagrNA";
import Products from "./Products";

export let userdata = {
  name: "Rahulroxx",
  age: "21",
  favNum: [1, 2, 3],
};

function Nav() {
  

  return (
    <BrowserRouter>
   
      <div>
        <Link className="Link" to="/Hello">
          Hello
        </Link>
        <Link className="Link" to="/Fruits">
          Fruits
        </Link>
        <Link className="Link" to="/Counter">
          Counter
        </Link>
        <Link className="Link" to="/Colors">
          Colors
        </Link>
        <Link className="Link" to="/Message">
          Message
        </Link>
        <Link className="Link" to="/Effect">
          Effect
        </Link>
        <Link className="Link" to="/Products">
          Product
        </Link>
      </div>
      <Routes>
        <Route path="/Hello" element={<Hello UserData={userdata} />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Colors" element={<Colors />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Effect" element={<Effect />}>
          <Route path="CounterByReducer" element={<CounterByReducer />} />
          <Route path="ConditionalCmpnt" element={<ConditionalCmpnt />} />
        </Route>
        <Route path="/Products/:id" element={<Products />} />
        <Route path="*" element={<PageNa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Nav;

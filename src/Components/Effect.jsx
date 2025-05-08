import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
//! Diffrent of using useEffect on diffrent Renders
export default function Effect() {
  let [count, setCount] = useState(0);
  let [Visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("Runs only on first render");
  }, []);
  useEffect(() => {
    console.log("Runs on every render");
  });
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        console.log("Count Changed");
        setVisible(true);
      });
    }
    //! this is when we use conditional rendering and the component is removed and a new component is added and vice versa
    return () => {};
  }, [HandleClick]);
  function HandleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h2>The useEffect is changed {count}</h2>
        <button onClick={HandleClick}>PLUS</button>
        <div>{Visible ? <p>HELLO WORLD</p> : <p> Loading....</p>}</div>
        <div>
          <div>
            <Link className="Link" to="CounterByReducer">
              CounterByReducer
            </Link>
            <Link className="Link" to="ConditionalCmpnt">
              ConditionalCmpnt
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

import Fruits from "./Fruits";
import Hello from "./Hello";
import { userdata } from "./Nav";
import { Link } from "react-router-dom";
export default function ConditionalCmpnt() {
  let dsiplay = true;
  const stl = {
    backgroundColor: "black",
    color: "aqua ",
  };
  let val; // we used this to avoid multiple return statements by assigning the same variable diffrent vslue in diffrent condition

  if (dsiplay) {
    val = (
      <>
        <h3 style={stl}>
          THis Below ia borrowed component showing conditional components
        </h3>

        <Hello UserData={userdata} />
        <h1 style={stl}> This is the If statement</h1>
      </>
    );
  } else {
    val = (
      <>
        <h3 style={stl}>
          THis Below ia borrowed component showing conditional components
        </h3>
        <Fruits />
        <h1 style={stl}>This is the else statement </h1>
      </>
    );
  }
  // another way is through ternary Operrators
  let value = dsiplay ? (
    <>
     <Link className="Link" to="/Effect" >Effect</Link>
      <h3 style={stl}>
        THis Below ia borrowed component showing conditional components
      </h3>

      <Hello UserData={userdata} />
      <h1 style={stl}> This is the If statement</h1>
    </>
  ) : (
    <>
     <Link className="Link" to="/Effect" >Effect</Link>
      <h3 style={stl}>
        THis Below ia borrowed component showing conditional components
      </h3>
      <Fruits />
      <h1 style={stl}>This is the else statement </h1>
    </>
  );
  return value;
}

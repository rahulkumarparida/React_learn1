
import Fruits from "./Fruits";

export default function Message() {
    function GiveMsg() {
        console.log("Event Occured");
       
    
        return ()=>{return <Fruits />}

    }
    
  
        // let userdata = JSON.parse(localStorage.getItem("USERDATA"))
 
    return <div>
        {/* <h1>My Name Is {userdata.firstName} {userdata.LastName} and I am {userdata.age}  </h1>
        <button onClick={GiveMsg}>Message @ Console </button> */}
    <h1>useEffect Occured</h1>
    </div>
}
import { useState } from "react";

export default function useDisplayMessage(){
    let [msg , setMsg] = useState("This is a Message from the message from the message hook")
function display(customMsg){

    console.log(customMsg);
    return customMsg
}
 return [msg ,display]
}
import { useState } from "react";
import "./Form.css"

export default function Form(){
    

    //! This below is the Procedure of how the callback function works in OnChange eventListner
    // function inputText(e){
    //     console.log(e.target.value);
    //     setName({ ...name,firstName : e.target.value })
       
        
        
    //     return e.target.value
    // }
    // function event(e){
      
    //     return inputText(e)
    // }
    const [name , setName] = useState({firstName : "Jhon" , LastName: "Doe" , age : "99" , email : "xyz@gmail.com" , Password : "xxx"})
  
    function handleSumbit(e){
         console.log(name);
         localStorage.setItem("USERDATA" , JSON.stringify(name))
    
    }

    let UserData = JSON.parse(localStorage.getItem("USERDATA"))
    
    return <div>
        <form >
        <input className="input" type="text" placeholder="FirstName" onChange={(e)=>{setName({...name , firstName : e.target.value}) }} /> <br />
        <input className="input" type="text" placeholder="LastName" onChange={(e)=>{setName({...name ,LastName:e.target.value})}} /> <br />
        <input className="input" type="text" placeholder="age" onChange={(e)=>{setName({...name ,age:e.target.value})}} /> <br />
        <input className="input" type="email" placeholder="email" onChange={(e)=>{setName({...name ,email:e.target.value})}} /> <br />
        <input className="input" type="password" placeholder="password" onChange={(e)=>{setName({...name ,Password:e.target.value})}} /> <br />
        <button onClick={handleSumbit}>Sumbit</button>
            <h1>FirstName : {UserData.firstName}</h1>
            <h1>LastName : {UserData.LastName}</h1>
            <h1>Age : {UserData.age}</h1>
            <h1>Email : {UserData.email}</h1>
            <h1>Password : {UserData.Password}</h1>
        </form>
    </div>
}
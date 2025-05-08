import { useState } from "react"


export default function Colors() {
    const [color ,setColor] = useState("white")
    let stl;
    const [styl , setStyl] = useState(stl)
    let blkArr = [" ☺ " , " ☻ " ," ♥ " ," ♦ "]
    let whArr = [" ♣ ", " ♠ "," • "," ◘ "]

   const [clrArr , setclrArr] = useState(whArr)
    function changeColor() {
        console.log(styl);
       
        if (color == "white") {
            console.log(color);
            stl = { 
                backgroundColor: "black", 
                color : "aqua"
            }
            setStyl(stl)
            setColor("black")
            setclrArr(blkArr)
        }else{
            console.log(color);
            stl = {
                backgroundColor: "",
                color : ""
            }
            setStyl(stl)
            setColor("white")
            setclrArr(whArr)
        }
    }





    return<>
    
    <div style={styl}>
        <p>Array of {color}: {clrArr} </p>
    <button onClick={changeColor}>{color}</button>
    </div>
    
    </>
}
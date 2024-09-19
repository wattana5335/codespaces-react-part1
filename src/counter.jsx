import { useState } from "react";
export default function Counter(){
    const [count,setcount]=useState(0);
    const [value,setvalue]=useState("Type here!");
    return (<>
    <input type="text"
        value={value}
        onChange={event=>setvalue(event.target.value)}
    />
    <h3>You type {value.length} chars</h3>
    <button onClick={()=> setcount(count+1)}>
        Click me! </button>
    <p>You click {count} times</p>
    <button onClick={()=> setcount(0)}>
        Reset</button>
    </>);
}

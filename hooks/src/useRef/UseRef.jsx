import { useRef } from "react";

function Ur(){

    const inputRef=useRef(null);

    const onClick=()=>{
        inputRef.current.focus();
        inputRef.current.value="";
    }

    return(
        <div>
            <input type="text" placeholder="Enter something" ref={inputRef}/>
            <button
            onClick={onClick}>click here</button>
        </div>
    )
}

export default Ur;
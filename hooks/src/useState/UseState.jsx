import { useState } from "react";

function States(){

    const [value, setValue]=useState(0);

    const handleCase=()=>{
        setValue(value+1);
    }

    return(
        <div>
            <p>{value}</p>
            <button onClick={handleCase}>increment</button>
        </div>
    )
}

export default States;
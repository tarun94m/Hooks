import { useState } from "react"

function St(){

    const [input, setInput]=useState('pedro');

    const onChange=(event)=>{
        setInput(event.target.value);
    }

    return(
        <div>
            <input type="text" onChange={onChange}/>
                <p>{input}</p>
        </div>
    )
}

export default St;
import { useEffect, useState } from "react";
import axios from "axios";

function Ue(){

    const [data, setData]=useState("");
    const [count, setCount]=useState(0);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email);
            console.log("Api called");
        })
    }, )

    return(
        <div>
            <h2>hello</h2>
            {data}
            <h2>{count}</h2>
            <button
            onClick={()=>{
                setCount(count+1);
            }}>Click</button>
        </div>
    )
}

export default Ue;  
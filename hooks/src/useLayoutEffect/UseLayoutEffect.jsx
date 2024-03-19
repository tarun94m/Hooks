import { useEffect, useLayoutEffect, useRef } from "react";


function Ule(){

    const inputRef=useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    }, []);

    useEffect(()=>{
        inputRef.current.value="Hello";
    }, []);

    return (
        <div>
            <input ref={inputRef} value="pedro" style={{width: 400, heigth: 60}}/>
        </div>
    )
}

export default Ule;
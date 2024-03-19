import { useContext } from "react";
import { AppContext } from "./Context";



function Login(){

    const {setUsername}=useContext(AppContext);

    return(
        <div>
            <input type="text" onChange={(event)=>{setUsername(event.target.value)}}/>
        </div>
    )
}

export default Login;
import { useContext } from "react";
import { AppContext } from "./Context";


function User(){

    const {username}=useContext(AppContext);

    return(
        <div>
            <p> User: {username}</p>
        </div>
    )
}

export default User;
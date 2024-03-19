import { useReducer } from "react";

const reducer=(state, action)=>{
    switch(action.type){
        case "Increment":
            return {count: state.count+1, showText: state.showText};
        case "toggleCases":
            return {count: state.count, showText: !state.showText};
        default: 
            return state;
    }
}

function Rs(){

    const [state, dispatch]=useReducer(reducer, {count: 0, showText: true});

    return(
        <div>
            <p>{state.count}</p>
            <button
            onClick={()=>{
                dispatch({type:"Increment"});
                dispatch({type: "toggleCases"});
            }}>Click Here!!</button>

            {state.showText && <p>This is a text</p>}
        </div>
    )
}

export default Rs;
import { useReducer } from "react";


export default function Obj(){





    const [state,dispatch] =useReducer(reducer,{count:0,incrementby:1})



function reducer(state,action){


if (action.type=="increment"){

    return {...state,count:state.count+state.incrementby}



}

if (action.type=="decrement"){


    return {...state,count:state.count-state.incrementby}

}

if (action.type=="setincrement"){
    return{...state,incrementby:action.payload}
}


}


return <div>

{state.count}


<input type="text" onChange={(e)=>dispatch({type:"setincrement",payload:Number(e.target.value)})} value={state.incrementby} />

<button onClick={()=>dispatch({type:"increment",payload:1})}>increment</button>
<button onClick={()=>dispatch({type:"decrement",payload:1})}> decrement</button>

<button></button>



</div>





}
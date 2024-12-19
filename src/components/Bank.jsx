import { useReducer, useState } from "react"



export default function App(){


    const [state,dispatch]=useReducer(reducer,{balance:0})
    const [amount,setamount]=useState(0)



    function reducer(state,action){

        if(action.type=="add"){

      return{...state,balance:state.balance+action.payload}

        }

        if(action.type=="sub"){

            return{...state,balance:state.balance-action.payload}
        
               }
    }


   

    return <div>



{state.balance}
<input type="text" onChange={(e)=>setamount(e.target.value)} value={amount}  name="" id="" />



<button onClick={()=>dispatch({type:"add",payload:Number(amount)})}>    deposit</button>

<button onClick={()=>dispatch({type:"sub",payload:Number(amount)})}>    WITHDRAW</button>




    </div>
}
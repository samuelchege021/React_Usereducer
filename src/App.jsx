import { useReducer, useState } from 'react'
import Obj from './components/obj';
import Bank from './components/Bank'

function App() {



const [count,setcount]=useState(0);

   const [state,dispatch]  = useReducer(reducer,0);

function reducer(state,action){

if (action.type=="increment"){

  return state +action.payload;
}

if (action.type=="decrement"){
  return state-action.payload
}


}
  return (
    <div>

<div>
   usestate:{count}


<button onClick={()=>setcount(count+1)}>increment</button>

<button  onClick={()=>setcount(count-1)}>DECREMENT</button>
usereducer:{state}


<button onClick={()=>dispatch({type:"increment",payload:1})}>increment count</button>
<button onClick={()=>dispatch({type:"decrement",payload:1})}  >decrement count</button>

</div><br /><br />

<div>

< Obj/>
</div><br /><br />

<div/>

<Bank/>

</div>


    
            
  )


}




export default App

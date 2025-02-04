import React, { useReducer } from 'react'

const initialState = {count : 0}

const reducer = (state , action)=>{
    switch(action.type){
        case 'increament' :
            return {count : state.count + 1}
        case 'decrement' :
            return state.count > 0 ? {count : state.count - 1}  : state
            
        default :
            return state   
    }

}


const UseReducer = () => {

    const [state , dispatch] = useReducer(reducer , initialState)




  return (
    <div>
        Count : {state.count}   
        <button onClick={()=>dispatch({type:"increament"})}>increament</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>

    </div>
  )
}

export default UseReducer
import { DECREAMENT, INCREAMENT } from "./actions";

const initalState = {count : 0}

const countReducer = (state = initalState , action) =>{
    switch(action.type){
        case INCREAMENT:
            return {count : state.count + 1}
        case DECREAMENT:
            return state.count > 0 ?{count : state.count - 1}  : state
        default:
            return state             
    }
}

export default countReducer
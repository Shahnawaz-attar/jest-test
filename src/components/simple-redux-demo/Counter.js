import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/actions";

const Counter = ()=>{
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Simple redux Counter</h2>
            <h3>{count}</h3>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
    )
}

export default Counter;
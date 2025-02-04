import { useDispatch, useSelector } from "react-redux"
import { decrement, increament } from "./counterSlice";

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    
    console.log(count);
    
    const dispatch = useDispatch();
    return (
        <div>
            <h1>React toolkit</h1>
            {count}
            <button onClick={() => dispatch(increament())} style={{ marginRight: '10px' }}>increament</button>
            <button onClick={() => dispatch(decrement())} style={{ marginRight: '10px' }}>decrement</button>

        </div>
    )
}

export default Counter
import { useDispatch, useSelector } from "react-redux"
import {decrement, decrementByAmount, increment, incrementByAmount, reset } from "../features/counter/counterSlice";

export function Counter(){
    const count=useSelector((state=>state.counter.value));
    const dispatch=useDispatch();
    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
            <button onClick={()=>dispatch(decrementByAmount(5))}>-5</button>
        </div>
    )
}
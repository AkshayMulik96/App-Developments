import { useDispatch, useSelector } from "react-redux";
import { add, div, mul, setA, setB, sub } from "../features/counter/arithmeticSlice";

export function Arithmetic(){
    const {a,b,c}=useSelector((state=>state.arithmetic));
    const dispatch=useDispatch();
    return(
        <div>
            <h2>Arithmetic</h2>
        <input
            type="number"
            value={a}
            onChange={(e) => dispatch(setA(Number(e.target.value)))}
            placeholder="Enter a"
        />
        <input
            type="number"
            value={b}
            onChange={(e) => dispatch(setB(Number(e.target.value)))}
            placeholder="Enter b"
        />
        <div>
            <button onClick={() => dispatch(add())}>Add</button>
            <button onClick={() => dispatch(sub())}>Sub</button>
            <button onClick={() => dispatch(mul())}>Mul</button>
            <button onClick={() => dispatch(div())}>Div</button>
        </div>
            <h3>Result : {c}</h3>
        </div>
    )    
}
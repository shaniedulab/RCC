import { useReducer ,useContext} from "react"
import AuthContext from "../Context/AuthContext";
import Input from "../input/input";


function reducer(currentState,action){
    switch(action){
        case 'increment':
            return {count: currentState.count+1}
        case 'decrement':
            return {count: currentState.count-1}
        default:
            return currentState;

    }
    
}

function Demo(){
    let context=useContext(AuthContext);
    console.log(context.isLogin);
    let [countv,updateCount]=useReducer(reducer,{count:0})

    function decreamentCount(){
        updateCount('decrement')
    }
    
    function increamentCount(){
        updateCount('increment')
    }
    
    return <div>
        <button onClick={decreamentCount}>+</button>
        <span>{countv.count}</span>
        <button onClick={increamentCount}>-</button>
        
        <button onClick={context.isLogout}>Logpout</button>
        <Input type="password">Name</Input>
    </div>
}

export default Demo
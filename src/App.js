import { useDispatch, useSelector } from "react-redux";
import { counterActionCreators } from "./redux/actionCreator";
 

function App() {
  const state = useSelector(store => store.counter)
  const dispatch = useDispatch ()

  //  const [count,setCount]= useState(0);


//  console.log("🚀 ~ file: App.js:5 ~ App ~ store", state)
  
  function handleDecrease(){
    dispatch(counterActionCreators.DECREASE());
//    dispatch(counterActionCreators[counterActions.DECREASE]())
  }
  function handleIncrease(){
    dispatch(counterActionCreators.INCREASE());
  }

  return (
    <div style={{margin: 20}}>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>
        {state.count}
      </h1>
    </div>
  );
}

export default App;

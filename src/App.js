import { useDispatch, useSelector } from "react-redux";
import { counterActionCreators, newsActionCreators } from "./redux/actionCreator";
 

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

  function handleGetNews(){
    dispatch(newsActionCreators.GET());
  }

  return (
    <div style={{margin: 20}}>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleGetNews}>Get News</button>
      <h1>
        {state.count}
      </h1>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { newsActionCreators } from "./redux/actionCreator";
import News from "./components/news/news";
 

function App() {
  const latestNews = useSelector(store => store?.news?.latestNews || []);
  const popularNews = useSelector(store => store?.news?.popularNews || []);
  const dispatch = useDispatch ()

  //  const [count,setCount]= useState(0);

 
//  console.log("🚀 ~ file: App.js:5 ~ App ~ store", state)
  
  function handleNews(){
    dispatch(newsActionCreators.GET_ALL());
  }

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} title="Latest News" />
      <News news={popularNews} title="Popular News" />
    </div>
  );
}

export default App;

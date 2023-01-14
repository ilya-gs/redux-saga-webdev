import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default App;


// import { useDispatch, useSelector } from "react-redux";
// import { newsActionCreators } from "./redux/actionCreator";
// import News from "./components/news/news";
 

// function App() {
//   const latestNews = useSelector(store => store?.news?.latestNews || []);
//   const popularNews = useSelector(store => store?.news?.popularNews || []);
//   const { latestNews: latestNewsError, popularNews: popularNewsError } = useSelector(store => store?.errors || {});  
//   const dispatch = useDispatch ()

//   //  const [count,setCount]= useState(0);

 
// //  console.log("🚀 ~ file: App.js:5 ~ App ~ store", state)
  
//   function handleNews(){
//     dispatch(newsActionCreators.GET_ALL());
//   }

//   return (
//     <div>
//       <button onClick={handleNews}>Get News</button>
//       <News news={latestNews} error={latestNewsError} title="Latest News" />
//       <News news={popularNews} error={popularNewsError} title="Popular News" />
//     </div>
//   );
// }

// export default App;

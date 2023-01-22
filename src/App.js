import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { commonActionCreators } from "./redux/actionCreator";

const App = ({ children }) => {
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('New Location: ', location);
    dispatch(commonActionCreators.SET_LOCATION(location.pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
};

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

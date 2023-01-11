import { useSelector } from "react-redux";

function App() {
  const store = useSelector(store => {
    return store
  })

  console.log("🚀 ~ file: App.js:5 ~ App ~ store", store)
  


  return (
    <h1>
      Hello 
    </h1>
  );
}

export default App;

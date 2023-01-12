import { combineReducers } from "redux";
import counter from "./counter.js"
import news from "./news.js"

 const reducer = combineReducers({
    counter, news
 })

 export default reducer; 
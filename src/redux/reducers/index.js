import { combineReducers } from "redux";
import counter from "./counter.js"
import news from "./news.js"
import errors from "./errors.js"

 const reducer = combineReducers({
    counter, news, errors
 })

 export default reducer; 
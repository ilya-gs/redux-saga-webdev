import { combineReducers } from "redux";
import counter from "./counter.js"
import news from "./news.js"
import errors from "./errors.js"
import common from "./common.js"


 const reducer = combineReducers({
    news,
    errors,
    router: common
 })

 export default reducer; 
import {take, takeEvery, takeLatest, takeLeading, select} from "redux-saga/effects"
import { counterActions, newsActions } from "../constants";
import counter from "../reducers/counter";
import { getLatestNews } from "../../api";

// const delay = (time) => new Promise((resolve,_) =>{
//     setTimeout(resolve, time * 1000)
// })

export function* workerSaga(){
//    const count = yield select(({counter}) => counter.count);
    const data = yield getLatestNews();
    console.log(data);
}

export function* watchClickSaga(){
    yield takeEvery(newsActions.GET,workerSaga);
    
    // yield take(counterActions.DECREASE);
    // console.log("watch 2");
}


export default function* rootSaga(){
    // console.log("🚀 ~ file: index.js:4 ~ rootSaga ~ HEllo SAGA world")
    yield watchClickSaga();
}

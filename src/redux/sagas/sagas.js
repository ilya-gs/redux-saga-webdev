import {take, takeEvery, takeLatest, takeLeading, select, put, call, fork, all} from "redux-saga/effects"
import { counterActions, newsActions } from "../constants";
import counter from "../reducers/counter";
import { getLatestNews, getPopularNews } from "../../api/api";
import { newsActionCreators } from "../actionCreator";

// const delay = (time) => new Promise((resolve,_) =>{
//     setTimeout(resolve, time * 1000)
// })

export function* handleLatestNews() {
    const data = yield call(getLatestNews, "react");
    console.log("🚀 ~ file: sagas.js:13 ~ function*handleLatestNews ~ data", data)
    yield put(newsActionCreators.SET_LATEST(data.hits))
}
    
export function* handlePopularNews() {
    const data = yield call(getPopularNews);
    console.log("🚀 ~ file: sagas.js:19 ~ function*handlePopularNews ~ data", data)
    yield put(newsActionCreators.SET_POPULAR(data.hits))
}


export function* handleNews(){
    // yield fork(handleLatestNews);
    // yield fork(handlePopularNews);
    yield all([
        call(handleLatestNews),
        call(handlePopularNews)
    ])
}

export function* watchClickSaga(){
    yield takeEvery(newsActions.GET_ALL, handleNews);
    
    // yield take(counterActions.DECREASE);
    // console.log("watch 2");
}


export default function* rootSaga(){
    // console.log("🚀 ~ file: index.js:4 ~ rootSaga ~ HEllo SAGA world")
    yield watchClickSaga();
}

import {take, takeEvery, takeLatest, takeLeading, select, put, call, fork, all, spawn} from "redux-saga/effects"
import { counterActions, newsActions } from "../constants";
import counter from "../reducers/counter";
import { getLatestNews, getPopularNews } from "../../api/api";
import { errorActionCreators, newsActionCreators } from "../actionCreator";

// const delay = (time) => new Promise((resolve,_) =>{
//     setTimeout(resolve, time * 1000)
// })

export function* handleLatestNews() {
    try {
        const data = yield call(getLatestNews, "react");        
        console.log("🚀 ~ file: sagas.js:13 ~ function*handleLatestNews ~ data", data);
        yield put(newsActionCreators.SET_LATEST(data.hits));
    } catch (error) {
        //throw new Error('Error fetching: ' + error);
        yield put(errorActionCreators.SET_LATEST_ERROR('Error fetching LATEST: ' + error));
    }
}
    
export function* handlePopularNews() {
    try {
        const data = yield call(getPopularNews);
        console.log("🚀 ~ file: sagas.js:19 ~ function*handlePopularNews ~ data", data);
        yield put(newsActionCreators.SET_POPULAR(data.hits));
    } catch (error) {
        yield put(errorActionCreators.SET_POPULAR_ERROR('Error fetching POPULAR: ' + error));
    }
}


export function* handleNews(){
    yield fork(handleLatestNews);
    yield fork(handlePopularNews);
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

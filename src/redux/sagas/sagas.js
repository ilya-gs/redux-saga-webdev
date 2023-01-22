import {takeLatest, select, put, call, fork,join} from "redux-saga/effects"
import { commonActions } from "../constants";
import { getLatestNews, getPopularNews } from "../../api/api";
import { errorActionCreators, newsActionCreators } from "../actionCreator";

// const delay = (time) => new Promise((resolve,_) =>{
//     setTimeout(resolve, time * 1000)
// })

export function* handleLatestNews() {
    try {
        const data = yield call(getLatestNews, "react");        
        //const data = yield apply(getLatestNews, ["react"]);
        console.log("🚀 ~ file: sagas.js:13 ~ function*handleLatestNews ~ data", data);
        yield put(newsActionCreators.SET_LATEST(data.hits));
    } catch (error) {
        //throw new Error('Error fetching: ' + error);
        yield put(errorActionCreators.SET_LATEST_ERROR('Error fetching LATEST: ' + error));
    }
}

//====================================================//

export function* handlePopularNews() {
    try {
        const data = yield call(getPopularNews);
        console.log("🚀 ~ file: sagas.js:19 ~ function*handlePopularNews ~ data", data);
        yield put(newsActionCreators.SET_POPULAR(data.hits));
    } catch (error) {
        yield put(errorActionCreators.SET_POPULAR_ERROR('Error fetching POPULAR: ' + error));
    }
}


//====================================================//

export function* watchNewSaga() {
    // yield delay(2000);
    // console.log('delay expired');
    yield put(newsActionCreators.SET_LOADING(true));
    const path = yield select(({ router }) => router.location.pathname)
    if (path === '/popular-news')
        yield call(handlePopularNews)
    if (path === '/latest-news')
        yield call(handleLatestNews)
    yield put(newsActionCreators.SET_LOADING(false));
}
//====================================================//

// export function* error() {
//     console.log('error!!1');
//     throw new Error('test error');
// }

//====================================================//

export function* loadTest() {
    const { hits } = yield call(getPopularNews);
    return hits;
}


//====================================================//

export default function* rootSaga() {
    //yield throttle(5000,commonActions.SET_LOCATION, () => console.log('throtled'));
    // console.log("🚀 ~ file: index.js:4 ~ rootSaga ~ HEllo SAGA world")

    // yield retry(5, 2000, error);

    yield takeLatest(commonActions.SET_LOCATION, watchNewSaga)
    
//    const news = yield fork(loadTest);
//    const [first] =yield join(news)
//    console.log(first);
}

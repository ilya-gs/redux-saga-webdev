import {take} from "redux-saga/effects"
import { counterActions } from "../constants";

export function workerSaga(){

}

export function* watchClickSaga(){
    yield take(counterActions.INCREASE);
    console.log("watch 1");
    yield take(counterActions.DECREASE);
    console.log("watch 2");
}


export default function* rootSaga(){
    // console.log("🚀 ~ file: index.js:4 ~ rootSaga ~ HEllo SAGA world")
    yield watchClickSaga();
}

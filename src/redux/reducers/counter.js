import { counterActions } from "../constants";

 

const counter = (state = {count: 0}, {type,payload}) => {
    switch(type){
        case counterActions.INCREASE :
            return {...state,count: state.count+1};
        case counterActions.DECREASE :
            return {...state,count: state.count-1};
        default:
            return state;    
    }
}
 
export default counter;
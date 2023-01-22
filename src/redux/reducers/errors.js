import { errorActions } from "../constants";

 const initialState = {
    latestNews: '',
    popularNews: '',
 }

const errors = (state = initialState, {type,payload}) => {
    switch(type){
        
        case errorActions.SET_LATEST_ERROR:
            //console.log("SET_LATEST_ERROR");
            return {
                ...state, 
                latestNews: payload
            };
            
        case errorActions.SET_POPULAR_ERROR:
            //console.log("SET_POPULAR_ERROR");
            return {
                ...state, 
                popularNews: payload
            };
        
        default:
            return state;    
    }
}
 
export default errors;
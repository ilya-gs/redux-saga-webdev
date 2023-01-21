import { newsActions } from "../constants";

 const initialState = {
    latestNews: [],
    popularNews: [],
    isLoading: false,
 }

const news = (state = initialState, {type,payload}) => {
    switch(type){

        case newsActions.SET_LATEST:
            return {
                ...state, 
                latestNews: payload,
            };
            
        case newsActions.SET_POPULAR:
            return {
                ...state, 
                popularNews: payload,
            };

        case newsActions.SET_LOADING:
            return {
                ...state,
                isLoading: payload,
            };
        
        default:
            return state;    
    }
}
 
export default news;
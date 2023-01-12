import { newsActions } from "../constants";

 const initialState = {
    latestNews: [],
    popularNews: [],
 }

const news = (state = initialState, {type,payload}) => {
    switch(type){
        case newsActions.GET :
            console.log("GET news");
            return {...state};
        
        case newsActions.SET_LATEST:
            console.log("SET_LATEST");
            return {
                ...state, 
                latestNews: [...state.latestNews, ...payload],
            };
            
        case newsActions.SET_POPULAR:
            console.log("SET_POPULAR");
            return {
                ...state, 
                popularNews: [...state.popularNews, ...payload],
            };
        
        default:
            return state;    
    }
}
 
export default news;
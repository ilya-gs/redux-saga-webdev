import { newsActions } from "../constants";

 

const news = (state = {count: 0}, {type,payload}) => {
    switch(type){
        case newsActions.GET :
            console.log("GET news");
            return {...state};
        default:
            return state;    
    }
}
 
export default news;
import { commonActions } from "../constants";

 const initialState = {
    location: '',
 }

const common = (state = initialState, {type,payload}) => {
    switch(type){
        
        case commonActions.SET_LOCATION:
            console.log("SET_LATEST_ERROR");
            return {
                ...state, 
                location: payload
            };
            
        default:
            return state;    
    }
}
 
export default common;
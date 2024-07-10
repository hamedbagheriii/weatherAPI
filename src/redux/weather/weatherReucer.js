import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherType";

const weatherState = {
    loading : false ,
    data : {} ,
    error : ''
}

const weatherReducer = (state = weatherState , action)=>{
    switch (action.type) {
        case SEND_WEATHER_REQUEST:
            return {...state , loading : true}
    
        case RECEIVE_WEATHER_RESPONSE:
            return {...state , loading : false , data : action.payLoad}

        case RECEIVE_WEATHER_ERROR:
            return {...state , loading : false , data : {} , error : action.payLoad}

        default:
            return state;
    }
}

export default weatherReducer;
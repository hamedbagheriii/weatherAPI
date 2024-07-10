import axios from "axios"
import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherType"

export const sendWeatherRequest = ()=>{
    return{
        type : SEND_WEATHER_REQUEST 
    }
}

export const receiveWeatherResponse = (data)=>{
    return{
        type : RECEIVE_WEATHER_RESPONSE ,
        payLoad : data
    }
}

export const receiveWeatherError = (error)=>{
    return{
        type : RECEIVE_WEATHER_ERROR ,
        payLoad : error
    }
}

// query : نام شهر یا روستا
export const getWeatherInfo = (query)=>{
    return (dispatch)=>{
        dispatch(sendWeatherRequest());
        axios.get(`https://jsonplaceholder.typicode.com/users/${query}`).then(res =>{
            dispatch(receiveWeatherResponse(res.data));
        }).catch(err =>{
            dispatch(receiveWeatherError(err.message));
        })
    }
}
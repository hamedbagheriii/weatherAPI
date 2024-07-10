import { applyMiddleware, createStore } from "redux";
import weatherReducer from "./weather/weatherReucer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// configureStore : برای ساخت استور
// خودش به صورت خودکار ریداکس تانک را دارد
// خودش به صورت خودکار ریداکس دو تولس را دارد
const store = configureStore({
    reducer : {
        weatherReducer ,
        // ردیوسر های دیگر
    },

});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import loadMoreReducer from "./globalData";
import backendFunctionSlice from "./functionsSlics";


const store = configureStore({
    reducer:{
        loadMore:loadMoreReducer,
        backendFunction:backendFunctionSlice,
    }
})

export default store;



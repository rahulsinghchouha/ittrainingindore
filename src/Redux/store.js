import { configureStore } from "@reduxjs/toolkit";
import loadMoreReducer from "./loadMoreSlice";


const store = configureStore({
    reducer:{
        loadMore:loadMoreReducer
    }
})

export default store;



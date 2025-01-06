import { configureStore } from "@reduxjs/toolkit";
import loadMoreReducer from "./globalData";
import backendFunctionSlice from "./functionsSlics";
import { contactUsDetails } from "./rTKFunction";

const store = configureStore({
    reducer:{
        loadMore:loadMoreReducer,
        backendFunction:backendFunctionSlice,
        [contactUsDetails.reducerPath]: contactUsDetails.reducer, // Attach the api slice reducer to the store
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactUsDetails.middleware), // Add RTK Query's middleware to handle caching and async logic
})

export default store;



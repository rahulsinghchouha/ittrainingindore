import {createSlice} from "@reduxjs/toolkit";

const loadMoreSlice = createSlice({
    name:'loadMore',
    initialState: {size:9},
    reducers:{
        setCardSize: (state,action) =>{
           state.size = action.payload;
        }

    }
})

export const {setCardSize} = loadMoreSlice.actions;
export default loadMoreSlice.reducer;


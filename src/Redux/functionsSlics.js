import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { ittrainingDataSerivice } from "../Services/dataService";

export const fetchCards = createAsyncThunk(
    'backendFunctions/fetchCards', // typePrefix (required)
    async () =>{
        console.log("inside the fetch cards ");
        const response = await ittrainingDataSerivice.getCourseCard();
        return response.data.data;
    }
);

const backendFunctionsSlice = createSlice({
    name:"backendFunctions",
    initialState:{
        webCard:[{}],
        isLoading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchCards.pending,(state)=>{
                console.log("Fetching cards - pending...");
                state.isLoading = true;
            })
            .addCase(fetchCards.fulfilled,(state,action)=>{
                console.log("Fetching cards - success:", action.payload);
                state.isLoading = false; //loading false when data is fetched
                state.webCard = action.payload; //assign fetch cards data to state
            })
            .addCase(fetchCards.rejected,(state,action)=>{
                console.log("Fetching cards - error:", action.error.message);
                state.isLoading = false; //set loading to false on error
                state.error = action.error.message
            })
    }
})


export default backendFunctionsSlice.reducer;


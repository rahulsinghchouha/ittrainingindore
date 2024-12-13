import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ittrainingDataSerivice } from "../Services/dataService";

export const fetchCards = createAsyncThunk(
    'backendFunctions/fetchCards', //  Type prefix (action identifier) (required)
    async () => {
        try {
          
            const response = await ittrainingDataSerivice.getCourseCard();
            if (response.status === 200)
                return response.data?.data;
            else {
                throw new Error(`Unexpected response status: ${response.status}`);
            }
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

);

export const getPlacedStudent = createAsyncThunk(
    'backendFunctions/getPlacedStudent',
    async () => {
        try {
           
            const response = await ittrainingDataSerivice.getStudentPlaced();
            if (response.status === 200)
               return response.data.data
               
                else {
                    console.log("error");
                throw new Error(`Unexpected response status: ${response.status}`);
            }

        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
)

const backendFunctionsSlice = createSlice({
    name: "backendFunctions",
    initialState: {
        webCard: [],
        stuPlaced: [],
        isLoadingWebCard: false,
        errorWebCard: null,
        isLoadingStuPlaced: false,
        errorStuPlaced: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.isLoadingWebCard = true;
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.isLoadingWebCard = false; //loading false when data is fetched
                state.webCard = action.payload; //assign fetch cards data to state
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.isLoadingWebCard = false; //set loading to false on error
                state.errorWebCard = action.error.message;
            })
            //for student placed card
            .addCase(getPlacedStudent.pending, (state) => {
                state.isLoadingStuPlaced = true;
            })
            .addCase(getPlacedStudent.fulfilled, (state, action) => {
                state.isLoadingStuPlaced = false;
                state.stuPlaced = action.payload;
            })
            .addCase(getPlacedStudent.rejected, (state, action) => {
                state.isLoadingStuPlaced = false;
                state.errorStuPlaced = action.error.message;
            })

    }
})

export default backendFunctionsSlice.reducer;




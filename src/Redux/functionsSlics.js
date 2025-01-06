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

export const studentForm = createAsyncThunk(
    'backendFunctions/studentForm',
    async (values) => {
        try {
            const response = await ittrainingDataSerivice.studentForm(values);
            if (response.status === 200)
               return response.data.message;
                else {
                    console.log("error");
                throw new Error(`form not submitted please try again: ${response.status}`);
            }
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
)

export const getExploreCards = createAsyncThunk(
    'backendFunctions/getExploreCards',
    async () =>{
            try{
                   const response =  await ittrainingDataSerivice.getExploreCards();
                            
                            if(response.status === 200)
                                 return response.data.data;
                            else{
                                console.log("error");
                                throw new Error(`Unexpected response status: ${response.status}`);
                            }
                }
            catch(error)
            {
                    console.log(error);
                    throw error;
            }
    }
)

//async operation using RTK Query 
// src/apiSlice.js






const backendFunctionsSlice = createSlice({
    name: "backendFunctions",
    initialState: {
        webCard: [],
        stuPlaced: [],
        exploreCat:[],
        studentFormMessage:null,
        isLoadingWebCard: false,
        errorWebCard: null,
        isLoadingStuPlaced: false,
        errorStuPlaced: null,
        isLoadingExploreCat: false,
        errorExploreCat: null, 
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
            //for Explore Category
            .addCase(getExploreCards.pending, (state) => {
                state.isLoadingExploreCat = true;               
            })
            .addCase(getExploreCards.fulfilled, (state, action) => {
                state.isLoadingExploreCat = false;
                state.exploreCat = action.payload;
            })
            .addCase(getExploreCards.rejected, (state, action) => {
                state.isLoadingExploreCat = false;
                state.errorExploreCat = action.error.message;
            })
            //for student Form 
            .addCase(studentForm.pending, (state) => {
                               
            })
            .addCase(studentForm.fulfilled, (state, action) => {
              
                state.studentFormMessage = action.payload;
            })
            .addCase(studentForm.rejected, (state, action) => {
                state.studentFormMessage = "data not saved please try again"
            })
    }
})

export default backendFunctionsSlice.reducer;




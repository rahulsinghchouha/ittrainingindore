import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ittrainingDataSerivice } from '../Services/dataService';

export const contactUsDetails = createApi({
    reducerPath: 'contactUsDetails', // Optional, defaults to 'api' identify to slice in this case slice name is contactUsDetails
    baseQuery: fetchBaseQuery({ baseUrl: `${ittrainingDataSerivice.backendUrl}` }), // Replace '/api' with your base URL it will use for all api call
    //after base url need to specify the endpoint of the url
    endpoints: (builder) => ({ 
      fetchData: builder.query({
        query: () => '/api/v1/get/get-contact-us', // path to get the data 
      }),
     
    }),
  });
  
  export const { useFetchDataQuery: useContactDetails } = contactUsDetails; // Alias the hook to 'useGetData'
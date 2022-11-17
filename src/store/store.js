

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from './auth';

export const store = configureStore({
    reducer: {
        // Aqui van mis reducers


        auth:  authSlice.reducer,



        
    },
});

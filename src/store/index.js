import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import plantSlice from "./plantSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        plant:plantSlice.reducer,
        ui:uiSlice.reducer
    }
})

export default store
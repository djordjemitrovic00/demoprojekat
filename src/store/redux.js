import { configureStore } from "@reduxjs/toolkit"
import { legacy_createStore as createStore } from "redux"
import authSlice from "./slices/authSlice"
import { modalSlice } from "./slices/modalSlice"
import starWarsSlice from "./slices/starWarsSlice"

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        starwars: starWarsSlice.reducer,
        modal: modalSlice.reducer
    }
})
export default store




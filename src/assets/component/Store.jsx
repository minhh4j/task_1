import {configureStore} from "@reduxjs/toolkit"
import ReducerSlice from "./todoSlice"

export const Store = configureStore({
    reducer:{
        todos:ReducerSlice,
    }
})
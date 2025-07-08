import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/counter/counterSlice";
import reducer1 from "./features/counter/arithmeticSlice";

export const store=configureStore({
    reducer:{
        counter: reducer,
        arithmetic: reducer1,
    },
});
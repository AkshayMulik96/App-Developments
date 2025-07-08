import { createSlice } from "@reduxjs/toolkit";

const arithmeticSlice=createSlice({
    name:'arithmetic',
    initialState:{
        a:0,
        b:0,
        c:0
    },
    reducers:{
        setA:(state,action)=>{
            state.a=action.payload;
        },
        setB:(state,action)=>{
            state.b=action.payload;
        },
        add:(state)=>{
            state.c=state.a+state.b;
        },
        sub:(state)=>{
            state.c=state.a-state.b;
        },
        mul:(state)=>{
            state.c=state.a*state.b;
        },
        div:(state)=>{
            state.c=state.b!==0? state.a/state.b : 'Error';
        },
    },
});
export const{setA,setB,add,sub,mul,div}=arithmeticSlice.actions;
export default arithmeticSlice.reducer;
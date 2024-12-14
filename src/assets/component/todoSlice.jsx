import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:"todos",
    initialState:{
        value:[] , value2:[]
    },
    reducers:{
        store:(state , action) => {
            state.value.push({id: state.value.length+1,text:action.payload,color:"white"})
        },
        store2:(state , action) => {
            state.value2.push({id:state.value2.length+1,text:action.payload})
        },
        TodoDelete:(state,action) => {
            state.value = state.value.filter((_,index) =>index != action.payload)
            state.value2 = state.value2.filter((_,index) =>index != action.payload)
        } ,
        addColor:(state,action) => {
          state.value = state.value.map((item) => item.id === action.payload ? {...item,color:"red"} : item)
        } ,
    }
})

export const {store , store2 , TodoDelete , addColor} = todoSlice.actions;
export default todoSlice.reducer;
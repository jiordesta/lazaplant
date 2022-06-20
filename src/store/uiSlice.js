import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState: {
        show: false,
        type: '',
        message: ''
    },
    reducers:{
        showUI(state,action){
            state.show = true
            state.type = action.payload.type
            state.message = action.payload.message
        },
        unShowUI(state){
            state.show = false
            state.type = ''
            state.message = ''
        }
    }
})

export const uiActions = uiSlice.actions 
export default uiSlice
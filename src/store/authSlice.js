import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState: {
        isLogin: false,
        users:[],
        user: null
    },
    reducers:{
        setUsers(state,action){
            state.users = action.payload
        },
        login(state,action){
            state.isLogin = true
            state.user = action.payload
        },
        logout(state){
            state.isLogin = false
            state.user = null
        },
    }
})

export const authActions = authSlice.actions 
export default authSlice
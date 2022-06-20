import { createSlice } from "@reduxjs/toolkit";

const plantSlice = createSlice({
    name:'plant',
    initialState: {
        userPlants : [],
        allPlants : []
    },
    reducers:{
        getAllPlants(state,action){
            state.allPlants = action.payload
        },
        getUserPlants(state,action){
            state.userPlants = action.payload.plants.filter((plant) => action.payload.user.id === plant.userid)
        }
    }
})

export const plantActions = plantSlice.actions 
export default plantSlice
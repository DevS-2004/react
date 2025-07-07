import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true,
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = false
            state.userData = null
        }
    }
    // actions => by default it is a property of authSlice that stores reducers
})


// actions is a object  that contains the list of all reducers function of authSlice 
export const {login, logout} = authSlice.actions;

export default authSlice.reducer
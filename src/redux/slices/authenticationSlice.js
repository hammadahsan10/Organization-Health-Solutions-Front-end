import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "authenticationSlice",
    initialState: {
      
    },
    reducers: {
        // LOGIN_SUCCESS: (state, action) => {
        //     return {
        //         ...state,
        //         loginData: action.payload,
        //         token: localStorage.getItem("token"),
        //         role: localStorage.getItem("role"),
        //         user: localStorage.getItem("user"),
             
        //     };
        // },
        // LOGIN_ERROR: (state) => {
        //     return {
        //         ...state,
        //         loginData: "",
        //         token: "",
        //         role: "",
        //     };
        // },
        UPDATE_PROFILE: (state, action) => {
            console.log("action.payload", action.payload)
            return {
                ...state,
                username: action?.payload?.username,
                dp: action?.payload?.Image,
            }
        },
    },
});

export const { LOGIN_SUCCESS, LOGIN_ERROR, UPDATE_PROFILE } = slice.actions;
export default slice.reducer;

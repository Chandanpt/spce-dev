import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth.types";

const initialState: AuthState = {
    value: {
        isLoggedIn: false,
        username: ""
    }
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => {
            document.cookie = "isLoggedIn=false; path=/";
            sessionStorage.setItem("access_token", "");
            return initialState;
        },
        login: (state, action: PayloadAction<string>) => {
            document.cookie = "isLoggedIn=true; path=/";
            return {
                value: {
                    isLoggedIn: true,
                    username: action.payload
                }
            }
        }
    }
})

export const {login, logout} = auth.actions;
export default auth.reducer;
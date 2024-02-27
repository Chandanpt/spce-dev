import { Action, Dispatch, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import emailReducer from "./features/email-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    authReducer,
    emailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<Action<string>>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

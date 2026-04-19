import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type IActionSaveUserPayload, type IAuthState } from "./model";

const initialState: IAuthState = {
  isLogged: false,
  userData: {
    id: 0,
    username: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    SAVE_USER: (
      state: IAuthState,
      action: PayloadAction<IActionSaveUserPayload>,
    ) => {
      const { user } = action.payload;
      return { ...state, userData: user };
    },
    LOGOUT: () => {
      return initialState;
    },
  },
});

export const { SAVE_USER: saveUser, LOGOUT: logout } = authSlice.actions;
export const { reducer } = authSlice;

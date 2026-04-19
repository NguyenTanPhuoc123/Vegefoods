import { createAction } from "@reduxjs/toolkit";
import * as Models from './model';
import { takeLatest } from "redux-saga/effects";
import { loginFn, registerFn } from "./saga";
import {reducer as authReducer} from "./reducer";
export const login = createAction<Models.IActionLoginPayload>(Models.LOGIN);
export const register = createAction<Models.IActionRegisterPayload>(Models.REGISTER);
export const logout = createAction<Models.IActionLogoutPayload>(Models.LOGOUT);

function* authSaga(){
    yield takeLatest(login,loginFn);
    yield takeLatest(register,registerFn);
}

export {authReducer,authSaga};
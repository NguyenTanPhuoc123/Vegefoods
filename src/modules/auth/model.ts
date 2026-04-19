import type { IActionCallBack } from "../base";

export const ROOT_MODULE = 'auth:';
export const LOGIN = `${ROOT_MODULE}/LOGIN`;
export const REGISTER = `${ROOT_MODULE}/REGISTER`;
export const  LOGOUT = `${ROOT_MODULE}/LOGOUT`;
export const SAVE_USER = `${ROOT_MODULE}/SAVE_USER`;
export interface IAuthState {
    isLogged:boolean;
    userData:UserData
}

export interface UserData {
    id:number;
    username:string;
    password:string;
}

export interface IActionLoginPayload extends IActionCallBack {
    username:string;
    password:string;
}

export interface BodyParams {
    username:string;
    password:string;
    repeatPassword:string;
}

export interface IActionRegisterPayload extends IActionCallBack {
    bodyParams:BodyParams;
}

export type IActionLogoutPayload = IActionCallBack;
export interface IActionSaveUserPayload{
    user: UserData;
}
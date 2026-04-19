import type { PayloadAction } from "@reduxjs/toolkit";
import * as AuthService from "./service";
import type { IActionLoginPayload, IActionRegisterPayload } from "./model";

export function* loginFn(action:PayloadAction<IActionLoginPayload>){
    const { username,password,onSuccess,onFail } = action.payload;
    const {result,error} = yield AuthService.login(username,password);
    if(result){
        onSuccess && onSuccess(result);
    }
    else{
        onFail && onFail(error);
    }

}

export function* registerFn(action:PayloadAction<IActionRegisterPayload>){
    const { bodyParams,onSuccess,onFail } = action.payload;
    const {result,error} = yield AuthService.register(bodyParams);
    if(!error){
        console.log("Error saga",result);
        onSuccess && onSuccess(result);
    }
    else{
        onFail && onFail(error);
    }
}
import * as AuthApi from "../../api/auth";
import type { BodyParams } from "./model";

export const login = async (username:string,password:string)=>{
    try{
        const res = await AuthApi.login(username,password);
        return {result:res};
    }
    catch(error){
        return {error};
    }
}

export const register = async (body:BodyParams)=>{
    try{
        const res = await AuthApi.register(body.username,body.password,body.repeatPassword);
        return {result:res};
    }
    catch(error){
        return {error};
    }
}
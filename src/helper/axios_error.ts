import type { AxiosError } from "axios";
import type { ApiError } from "../constants/api";

 export const handleAxiosError = (error:AxiosError<any>):ApiError =>{
    if(error.response){
        return {
            code: error.response.data.code || error.response.status,
            status_code: error.response.status,
            message: error.response.data?.error || error.response.data?.message || "An error occurred",
            data: error.response.data,
            summary: error.code,

        }
    }
    if(error.request){
        return {
            code: 0,
            status_code: 0,
            message: "No response received from server",
            data: null,
            summary: "NETWORK_ERROR",
        }
    }
    return {
        code:-1,
        status_code: -1,
        message: error.message || "An unexpected error occurred",
        data: null,
        summary: "UNKNOWN_ERROR",
    }
 }
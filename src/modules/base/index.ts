import type { Action } from "redux";
import type { ApiError } from "../../constants/api";


export const CommonActionType = {
  RESET_ALL_STATE: 'RESET_ALL_STATE',
} as const;

export type CommonActionType = typeof CommonActionType[keyof typeof CommonActionType];


export interface IActionCallBack{
    onSuccess?:(data?:any,indentify?:string)=>void,
    onFail?: (error:ApiError)=>void
}

export interface IActionResetAllState extends Action {
    type: typeof CommonActionType.RESET_ALL_STATE
}

export interface IActionPaginationArg{
    page?:number,
    limit?:number
}
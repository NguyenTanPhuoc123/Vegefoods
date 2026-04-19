import { persistReducer, type PersistConfig } from "redux-persist";
import type { IAuthState } from "../modules/auth/model";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
import { combineReducers } from "redux";
import { reducer as auth } from "../modules/auth/reducer";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import localStorage from "redux-persist/lib/storage";

const authPersist: PersistConfig<IAuthState> = {
    key: "auth",
    whitelist: ["isLogged","userData"],
    storage: localStorage,
    stateReconciler:autoMergeLevel1
}
const reducers = combineReducers({
    auth: persistReducer(authPersist,auth)
});

export type RootState = ReturnType<typeof reducers>;
export const SelectState: TypedUseSelectorHook<RootState> = useSelector;
export default reducers;
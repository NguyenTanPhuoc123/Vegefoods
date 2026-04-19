import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import { persistStore } from "redux-persist";
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:reducers,
    middleware:getDefaultSagaMiddleware => getDefaultSagaMiddleware({thunk:false,immutableCheck: false,serializableCheck:false}).concat([sagaMiddleware])
})

const persistor = persistStore(store,undefined,()=>{
    console.log("Persistor completed!");
});

sagaMiddleware.run(rootSaga);
export {store,persistor};
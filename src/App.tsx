import { Provider } from "react-redux";
import Login from "./pages/Authentication/login/Login";
import Register from "./pages/Authentication/register/Register";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { createRef } from "react";
import type { LoadingPageRef } from "./components/LoadingPage/type";
import LoadingPage from "./components/LoadingPage/LoadingPage";

export const loadingRef = createRef<LoadingPageRef>();
function BasicExample() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <LoadingPage ref={loadingRef} />
      </PersistGate>
    </Provider>
  );
}

export default BasicExample;

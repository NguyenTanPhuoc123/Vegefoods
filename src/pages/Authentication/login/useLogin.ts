import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import type { ILoginFormValues } from "./model";
import { useNavigate } from "react-router-dom";
import { login } from "../../../modules/auth";
import type { ApiError } from "../../../constants/api";
import type { ApiResponse } from "../../../api/model";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import NavigationActionService from "../../../loading/loading";
import { useToast } from "../../../components/ToastContext/ToastContext";
const useLogin = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const {showToast} = useToast();
  const initValue = { username: "", password: "" };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    defaultValues: initValue,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  
  const navigate = useNavigate();

  const onFocusUsername = () => {
    usernameRef.current?.focus();
  };

  const onFocusPassword = () => {
    passwordRef.current?.focus();
  };

  const onLoginSuccess = (result?: ApiResponse) => {
    NavigationActionService.hideLoading();
    showToast(result?.message || "Login successfully", "success");
    navigate("/");
  };

  const onLoginFailed = (error?: ApiError) => {
    NavigationActionService.hideLoading();
    showToast(error?.message || "Have error in login", "danger");
  };

  const onLogin = handleSubmit((value: ILoginFormValues) => {
    NavigationActionService.showLoading();
    const bodyParams = {
      username: value.username,
      password: value.password,
    };

    dispatch(
      login({
        ...bodyParams,
        onSuccess: onLoginSuccess,
        onFail: onLoginFailed,
      }),
    );
  });
  return {
    usernameRef,
    passwordRef,
    onFocusUsername,
    onFocusPassword,
    onLogin,
    control,
    errors,
  };
};

export default useLogin;

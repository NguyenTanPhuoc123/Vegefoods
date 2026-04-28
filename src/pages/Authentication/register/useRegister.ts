import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import type { IRegisterFormValues } from "./model";
import { useNavigate } from "react-router-dom";
import { register } from "../../../modules/auth";
import type { ApiError } from "../../../constants/api";
import type { ApiResponse } from "../../../api/model";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import NavigationActionService from "../../../loading/loading";
import { useToast } from "../../../components/ToastContext/ToastContext";
const useRegister = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const initValue = { username: "", password: "", confirmPassword: "" };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    defaultValues: initValue,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const { showToast } = useToast();
  const navigate = useNavigate();

  const onFocusUsername = () => {
    usernameRef.current?.focus();
  };

  const onFocusPassword = () => {
    passwordRef.current?.focus();
  };
  const onFocusConfirmPassword = () => {
    confirmPasswordRef.current?.focus();
  };

  const onRegisterSuccess = (result?: ApiResponse) => {
    NavigationActionService.hideLoading();
    showToast(result?.message || "Register successfully", "success");
    navigate("/login");
  };

  const onRegisterFailed = (error?: ApiError) => {
    NavigationActionService.hideLoading();
    showToast(error?.message || "Register failed", "danger");
  };

  const onRegister = handleSubmit((value: IRegisterFormValues) => {
    NavigationActionService.showLoading();
    const bodyParams = {
      username: value.username,
      password: value.password,
      repeatPassword: value.confirmPassword,
    };

    dispatch(
      register({
        bodyParams: bodyParams,
        onSuccess: onRegisterSuccess,
        onFail: onRegisterFailed,
      }),
    );
  });
  return {
    usernameRef,
    passwordRef,
    confirmPasswordRef,
    onFocusUsername,
    onFocusPassword,
    onFocusConfirmPassword,
    onRegister,
    control,
    errors,
  };
};

export default useRegister;

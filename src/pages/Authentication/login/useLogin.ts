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
const useLogin = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
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
  const [isShow, setIsShow] = useState(false);
  const [contentAlert, setContentAlert] = useState("");
  const [variantAlert, setVariantAlert] = useState<"success" | "danger">(
    "success",
  );
  const navigate = useNavigate();

  const onFocusUsername = () => {
    usernameRef.current?.focus();
  };

  const onFocusPassword = () => {
    passwordRef.current?.focus();
  };

  const onLoginSuccess = (result?: ApiResponse) => {
    NavigationActionService.hideLoading();
    setVariantAlert("success");
    setContentAlert(result?.message || "Login successfully");
    setIsShow(true);
    navigate("/");
  };

  const onLoginFailed = (error?: ApiError) => {
    NavigationActionService.hideLoading();
    setVariantAlert("danger");
    setContentAlert(error?.message || "Have error in login");
    setIsShow(true);
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
    isShow,
    contentAlert,
    onFocusUsername,
    onFocusPassword,
    onLogin,
    setIsShow,
    variantAlert,
    control,
    errors,
  };
};

export default useLogin;

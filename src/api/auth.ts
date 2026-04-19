import { API } from "../constants/api";
import axios from "axios";
import { handleAxiosError } from "../helper/axios_error";

export const login = async (username: string, password: string) => {
  try {
    const res = await axios(`${API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        password,
      },
    });

    return res.data;
  } catch (error: any) {
    const formattedError = handleAxiosError(error);
    throw formattedError;
  }
};

export const register = async (
  username: string,
  password: string,
  repeatPassword: string,
) => {
  try {
    const res = await axios(`${API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        password,
        repeatPassword,
      },
    });

    return res.data;
  } catch (error: any) {
    const formattedError = handleAxiosError(error);
    throw formattedError;
  }
};

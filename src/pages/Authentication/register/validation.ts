import { object, string, ref } from "yup";

 export const validationSchema = object().shape({
    username: string().required("Username is required").trim().min(6, "Username must be at least 6 characters"),
    password: string().required("Password is required").trim().min(6, "Password must be at least 6 characters"),
    confirmPassword: string().required("Confirm password is required").oneOf([ref("password")], "Password and confirm password do not match"),
 })
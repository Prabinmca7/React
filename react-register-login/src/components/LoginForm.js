// src/components/LoginForm.js
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const API_LOGIN = "https://reqres.in/api/login";
const API_KEY = "reqres-free-v1";

export default function LoginForm({ onSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   const response = await axios.post(
    //     API_LOGIN,
    //     {
    //       email: data.email,
    //       password: data.password,
    //     },
    //     {
    //       headers: {
    //         "x-api-key": API_KEY,
    //       },
    //     }
    //   );
    //   onSuccess(`Login successful! Token: ${response.data.token}`);
    //   reset();
    // } catch (error) {
    //   const message =
    //     error.response?.data?.error || "Network or unknown error";
    //   onSuccess(message);
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Login</h2>

      {/* Email */}
      <div className="mb-3">
        <label>Email</label>
        <input
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email",
            },
          })}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>

      {/* Password */}
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          {...register("password", {
            required: "Password is required",
          })}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>

      <button className="btn btn-primary w-100" type="submit">
        Login
      </button>
    </form>
  );
}
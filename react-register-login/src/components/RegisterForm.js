// src/components/RegisterForm.js
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const API_REGISTER = "https://reqres.in/api/register";
const API_KEY = "reqres-free-v1";

export default function RegisterForm({ onSuccess }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        API_REGISTER,
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "x-api-key": API_KEY,
          },
        }
      );
      onSuccess(`Registration successful! Token: ${response.data.token}`);
      reset();
    } catch (error) {
      const message =
        error.response?.data?.error || "Network or unknown error";
      onSuccess(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Register</h2>

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
            minLength: { value: 6, message: "Min 6 characters" },
            maxLength: { value:12, message: "Max 12 characters"}
          })}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>

      {/* Confirm Password */}
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className={`form-control ${
            errors.confirmPassword ? "is-invalid" : ""
          }`}
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
      </div>

      <button className="btn btn-primary w-100" type="submit">
        Register
      </button>
    </form>
  );
}
// src/components/AuthFormSwitcher.js
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthFormSwitcher() {
  const [isRegister, setIsRegister] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      {apiMessage && (
        <div
          className={`alert ${
            apiMessage.toLowerCase().includes("successful")
              ? "alert-success"
              : "alert-danger"
          }`}
        >
          {apiMessage}
        </div>
      )}

      {isRegister ? (
        <RegisterForm onSuccess={setApiMessage} />
      ) : (
        <LoginForm onSuccess={setApiMessage} />
      )}

      <div className="text-center mt-3">
        <button
          className="btn btn-link"
          onClick={() => {
            setIsRegister(!isRegister);
            setApiMessage("");
          }}
        >
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
}
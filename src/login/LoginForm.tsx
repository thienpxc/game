import React from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        const username = (e.target as any).username.value;
        const password = (e.target as any).password.value;
        if (username === "admin" && password === "admin") {
          alert("login success");
          localStorage.setItem("logined", "true");
          navigate("/");
        } else {
          navigate("/authen");
        }
      }}
    >
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" value="Login" > dang nhap </button>
    </form>
  );
}


import React from "react";

export function SignupForm() {
  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
}

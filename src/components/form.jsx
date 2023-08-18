import React from "react";

export default function Form() {
  return (
    <div className="form-con">
      <form>
        <label for="email">Email:</label> <br />
        <input type="text" name="email" /> <br />
        <label for="pass">Password:</label> <br />
        <input type="password" /> <br />

        <button type="submit" className="login2">Login</button>
      </form>

      <a href="#" className="restore">Forgot username or password?</a>
      <p>Don't have an account? <a href="#">Sign up</a></p>
    </div>
  );
}

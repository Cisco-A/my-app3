import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({ email: "", pass: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      if (name === "email") {
        return {
          email: value,
          pass: prev.pass,
        };
      } else if (name === "pass") {
        return {
          email: prev.email,
          pass: value,
        };
      }
    });
  }

  return (
    <div className="form-con">
      <form>
        <label for="email">Email:</label> <br />
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />{" "}
        <br />
        <label for="pass">Password:</label> <br />
        <input type="password" name="pass" value={input.pass} onChange={handleChange} /> <br />
        <button type="submit" className="login2">
          Login
        </button>
      </form>

      <a href="#" className="restore">
        Forgot username or password?
      </a>
      <p>
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
}

import React from "react";
import styles from "./LoginPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignin = (e) => {
    setError(true);
    // console.log(data);
    if (data.email.trim().length === 0 || data.password.trim().length === 0) {
      e.preventDefault();
    } else {
      alert("You are successfully signed in");
      navigate("/Dashboard");
    }
  };

  return (
    <div className={styles.wholePage}>
      <div className={styles.mainDiv}>
        <h1>DCX CMS</h1>
        <input
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Email Address"
          name="email"
        />
         {data.email.trim().length === 0 && error ? (
          <div className={styles.error}>Please enter your email address</div>
        ) : null}
        <br />
        <input
          onChange={handleChange}
          className={styles.input}
          type="password"
          placeholder="Password"
          name="password"
        />
       {data.password.trim().length === 0 && error ? (
          <div className={styles.error}>Please enter your password</div>
        ) : null}
        <br />
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
          />
          <label for="remember">Remember Me</label>
        </div>
        <button
          onClick={() => {
            handleSignin();
          }}
          className={styles.button}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

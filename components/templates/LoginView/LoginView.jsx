import React from "react";
import classes from "./login-view.module.scss";

export const LoginView = () => {
  return (
    <div className={classes.login}>
      <div className={classes.login__form}>
        <h3 className={classes.login__title}>Welcome back</h3>
        <p className={classes.login__subtitle}>
          Welcome back! Please enter your details.
        </p>
        <p className={classes.login__email}>Email</p>
        <input
          className={classes.login__input}
          type="text"
          placeholder="Enter your email"
        />
        <p className={classes.login__password}>Password</p>
        <input
          className={classes.login__input}
          type="password"
          placeholder="••••••••"
        />
        <div className={classes.login__buttons}>
          <button matRipple className={classes.login__button}>
            Sign in
          </button>
          <button matRipple className={classes.login__buttonGoogle}>
            Sign in with Google
          </button>
        </div>
        <div className={classes.login__textsTwo}>
          <p className={classes.login__account}>Don’t have an account?</p>
          <p className={classes.login__signUp}>Sign up</p>
        </div>
      </div>
      <div className={classes.login__right}></div>
    </div>
  );
};

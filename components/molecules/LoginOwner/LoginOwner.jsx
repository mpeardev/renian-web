import React from "react";
import classes from "./login-owner.module.scss";
import Image from "next/image";

export const LoginOwner = () => {
  return (
    <div className={classes.owner}>
      <div className={classes.owner__form}>
        <h3 className={classes.owner__title}>Welcome back</h3>
        <p className={classes.owner__subtitle}>
          Welcome back! Please enter your details.
        </p>
        <p className={classes.owner__email}>Email</p>
        <input
          className={classes.owner__input}
          type="text"
          placeholder="Enter your email"
        />
        <p className={classes.owner__password}>Password</p>
        <input
          className={classes.owner__input}
          type="password"
          placeholder="••••••••"
        />
        <div className={classes.owner__buttons}>
          <button matRipple className={classes.owner__button}>
            Sign in
          </button>
          <button matRipple className={classes.owner__buttonGoogle}>
            Sign in with Google
          </button>
        </div>
        <div className={classes.owner__textsTwo}>
          <p className={classes.owner__account}>Don’t have an account?</p>
          <p className={classes.owner__signUp}>Sign up</p>
        </div>
      </div>
      <div className={classes.owner__right}>
        <div>
          <Image
            src="/svg/renian-logo.svg"
            layout="responsive"
            width={160}
            height={50}
            alt="fb-icon"
          />
        </div>
      </div>
    </div>
  );
};

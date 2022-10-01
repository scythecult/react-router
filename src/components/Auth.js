import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/auth-slice";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [wasEmailTouched, setWasEmailTouched] = useState(false);
  const [wasPassTouched, setWasPassTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);

  const isFormValid = isEmailValid && isPassValid;

  const onEmailBlur = () => {
    setWasEmailTouched(true);
  };

  const onPassBlur = () => {
    setWasPassTouched(true);
  };

  const onEmailChange = (evt) => {
    const emailValue = evt.target.value.trim();
    const isValid = emailValue.includes("@");

    setEmailValue(emailValue);

    if (isValid) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const onPassChange = (evt) => {
    const passValue = evt.target.value.trim();
    const isValid = passValue.length >= 4;

    setPassValue(passValue);

    if (isValid) {
      setIsPassValid(true);
    } else {
      setIsPassValid(false);
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    dispatch(loginUser());
  };

  const emailErrorClasses =
    wasEmailTouched && !isEmailValid
      ? `${classes.control} ${classes.error}`
      : `${classes.control}`;
  const passErrorClasses =
    wasPassTouched && !isPassValid
      ? `${classes.control} ${classes.error}`
      : `${classes.control}`;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmit}>
          <div className={emailErrorClasses}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={onEmailChange}
              onBlur={onEmailBlur}
            />
          </div>
          <div className={passErrorClasses}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passValue}
              onChange={onPassChange}
              onBlur={onPassBlur}
            />
          </div>
          <button type="submit" disabled={!isFormValid}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export { Auth };

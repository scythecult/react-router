import React, { useContext, useState } from "react";
import { CartContext } from "../../context/context";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";

import styles from "./login.module.css";
import visible from "./media/visible.png";
import invisible from "./media/invisible.png";
import { useHttp, useValidation } from "../../hooks/hooks";
import { FIRE_DB_USERS } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { login, logut, setIsNewUser, updateUser } from "../../features/auth/user-auth";

const validateLogin = (value) => value.trim().length > 4;
const validatePass = (value) => value.trim().length > 7;

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, currentUser } = useSelector((state) => state.auth);
  const { setIsLoginShown } = useContext(CartContext);
  const [isPassShown, setIsPassShown] = useState(false);
  const [fetchData] = useHttp({ url: FIRE_DB_USERS, method: "GET" });
  const [postNewUser] = useHttp({ url: FIRE_DB_USERS, method: "POST" });
  const [loginValue, isLoginError, isLoginValid, setLoginValue, setIsloginTouched] =
    useValidation(validateLogin);
  const [passValue, isPassError, isPassValid, setPassValue, setIsPassTouched] =
    useValidation(validatePass);

  const isFormValid = isLoginValid && isPassValid;

  const setUserInfo = ({ userId, loginValue, passValue }) => {
    dispatch(login());
    dispatch(updateUser({ userId, loginValue, passValue }));
    setIsLoginShown(false);
    localStorage.setItem(userId, JSON.stringify({ loginValue, passValue }));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    fetchData().then((response) => {
      if (response) {
        const existingUser = Object.entries(response).find(
          ([_, value]) => value.loginValue === loginValue && value.passValue === passValue
        );

        if (existingUser?.length) {
          const [userId, userInfo] = existingUser;

          setUserInfo({ userId, ...userInfo });
          dispatch(setIsNewUser(false));
        } else {
          postNewUser({ loginValue, passValue }).then((response) => {
            if (response) {
              setUserInfo({
                userId: response.name,
                loginValue,
                passValue,
              });
              dispatch(setIsNewUser(true));
            }
          });
        }
      }
    });
  };

  const resetForm = () => {
    setLoginValue("");
    setPassValue("");
    setIsloginTouched(false);
    setIsPassTouched(false);
    setIsLoginShown(false);
  };

  const onLoginChange = (evt) => {
    setLoginValue(evt.target.value);
  };

  const onLoginBlur = () => {
    setIsloginTouched(true);
  };

  const onPassChange = (evt) => {
    setPassValue(evt.target.value);
  };

  const onPassBlur = () => {
    setIsPassTouched(true);
  };

  const onTogglePassClick = () => {
    setIsPassShown((isShown) => (isShown = !isShown));
  };

  const onLogoutClick = () => {
    dispatch(logut());

    setIsLoginShown(false);
    localStorage.removeItem(currentUser.userId);
  };

  let userInfoContent = (
    <div className={styles["user-info"]}>
      <h2>User info</h2>
      <p>
        Your Login: <span>{currentUser.loginValue}</span>
      </p>
      <p>
        Your Password: <span>{currentUser.passValue}</span>
      </p>
      <Button handler={onLogoutClick}>Log out</Button>
    </div>
  );

  if (!isLoggedIn) {
    userInfoContent = (
      <form className={styles.login} onSubmit={onFormSubmit}>
        <h2>Please login to order</h2>
        <div className={styles.inputs}>
          <label className={`${styles["input-login"]} ${isLoginError && styles.error}`}>
            <input
              type={"text"}
              placeholder="Login"
              onChange={onLoginChange}
              onBlur={onLoginBlur}
              value={loginValue}
            />
            <span className={styles["error-message"]}>Login is too short</span>
          </label>
          <label className={`${styles["input-pass"]} ${isPassError && styles.error}`}>
            <input
              type={isPassShown ? "text" : "password"}
              placeholder="Password"
              onChange={onPassChange}
              onBlur={onPassBlur}
              value={passValue}
            />
            <span className={styles["error-message"]}>Password is too short</span>
            <Button
              handler={onTogglePassClick}
              config={{ className: styles["password-button"] }}>
              {<img src={isPassShown ? visible : invisible} alt={"eye icon"} />}
            </Button>
          </label>
          <div className={styles.buttons}>
            <Button
              handler={() => {
                resetForm();
                setIsLoginShown(false);
              }}
              config={{ className: styles["login-button"] }}>
              Close
            </Button>
            <Button
              config={{
                type: "submit",
                className: styles["login-button"],
                isDisabled: !isFormValid,
                withSpinner: false,
              }}>
              Login
            </Button>
          </div>
        </div>
      </form>
    );
  }

  return <Modal handler={() => setIsLoginShown(false)}>{userInfoContent}</Modal>;
};

export { Login };

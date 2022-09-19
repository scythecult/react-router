import React, { useContext, useState } from "react";
import { CartContext } from "../../context/context";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";

import styles from "./login.module.css";
import visible from "./media/visible.png";
import invisible from "./media/invisible.png";
import { useHttp, useValidation } from "../../hooks/hooks";
import { FIRE_DB_USERS } from "../../constants/constants";

const validateLogin = (value) => value.trim().length > 4;
const validatePass = (value) => value.trim().length > 7;

const Login = () => {
  const { setIsLoginShown, setIsLoggedIn } = useContext(CartContext);
  const [fetchData] = useHttp({ url: FIRE_DB_USERS, method: "GET" });
  const [isPassShown, setIsPassShown] = useState(false);
  const [loginValue, isLoginError, isLoginValid, setLoginValue, setIsloginTouched] =
    useValidation(validateLogin);
  const [passValue, isPassError, isPassValid, setPassValue, setIsPassTouched] =
    useValidation(validatePass);

  const isFormValid = isLoginValid && isPassValid;

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    //1. check id in LS
    // if LS has stored id

    //2. send request
    fetchData().then((response) => {
      if (response) {
        for (const [key, value] of Object.entries(response)) {
          //3. check if response includes stored id
          // 3. check if response includes pass & login equal to entered pass & login
          // if(key === storedId)
          if (value.loginValue === loginValue && value.passValue === passValue) {
            // if yes - authorize user
            // if no - create new user, autorize user
            console.log(key, value);
            console.log("logged in");
            setIsLoggedIn(true);
            return;
          } else {
            console.log("new user has been created");
          }
        }
      }
    });
    // fetchData({ loginValue, passValue }).then((response) => console.log(response));
    // console.log("try to send data to firebase", { loginValue, passValue });
    // resetForm();
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

  return (
    <Modal handler={() => setIsLoginShown(false)}>
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
    </Modal>
  );
};

export { Login };

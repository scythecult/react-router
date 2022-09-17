import React, { useContext, useState } from "react";
import { CartContext } from "../../context/context";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";

import styles from "./login.module.css";
import visible from "./media/visible.png";
import invisible from "./media/invisible.png";

const Login = () => {
  const { setIsLoginShown } = useContext(CartContext);
  const [loginValue, setLoginValue] = useState("");
  const [isLoginValid, setIsloginValid] = useState(false);
  const [isLoginTouched, setIsloginTouched] = useState(false);
  const [passValue, setPassValue] = useState("");
  const [isPassValid, setIsPassValid] = useState(false);
  const [isPassTouched, setIsPassTouched] = useState(false);
  const [isPassShown, setIsPassShown] = useState(false);

  const isLoginError = !isLoginValid && isLoginTouched;
  const isPassError = !isPassValid && isPassTouched;
  const isFormValid = isLoginValid && isPassValid;

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    console.log("send data to firebase", { loginValue, passValue });
    resetForm();
  };

  const resetForm = () => {
    setLoginValue("");
    setPassValue("");
  };

  const onLoginChange = (evt) => {
    const inputValue = evt.target.value;

    if (inputValue.trim().length > 4) {
      setIsloginValid(true);
    } else {
      setIsloginValid(false);
    }

    setLoginValue(inputValue);
  };

  const onLoginBlur = () => {
    setIsloginTouched(true);
  };

  const onPassChange = (evt) => {
    const inputValue = evt.target.value;

    if (inputValue.trim().length > 7) {
      setIsPassValid(true);
    } else {
      setIsPassValid(false);
    }

    setPassValue(inputValue);
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

import React, { useContext, useState } from "react";
import { CartContext } from "../../context/context";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";

import styles from "./login.module.css";
import visible from "./media/visible.png";
import invisible from "./media/invisible.png";

const Login = () => {
  const { setIsloginShown } = useContext(CartContext);
  const [isPassShown, setIsPassShown] = useState(false);

  const onTogglePassClick = () => {
    setIsPassShown((isShown) => (isShown = !isShown));
  };

  return (
    <Modal handler={() => setIsloginShown(false)}>
      <form className={styles.login}>
        <h2>Please login to order</h2>
        <div className={styles.inputs}>
          <label className={styles["input-login"]}>
            <input type={"text"} placeholder="User Login" />
          </label>
          <label className={styles["input-pass"]}>
            <input type={isPassShown ? "text" : "password"} placeholder="User Password" />
            <Button
              handler={onTogglePassClick}
              config={{ className: styles["password-button"] }}>
              {<img src={isPassShown ? visible : invisible} alt={"eye icon"} />}
            </Button>
          </label>
          <div className={styles.buttons}>
            <Button
              handler={() => setIsloginShown(false)}
              config={{ className: styles["login-button"] }}>
              Close
            </Button>
            <Button config={{ className: styles["login-button"] }}>Login</Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export { Login };

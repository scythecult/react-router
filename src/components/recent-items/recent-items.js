import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { FIRE_DB_RECENT_MEALS } from "../../constants/constants";
import { useHttp } from "../../hooks/hooks";
import { Button } from "../UI/button";
import { Card } from "../UI/card";

import styles from "./recent-items.module.css";

const RecentItems = React.memo(() => {
  const STORAGE_KEY = "isExpanded";

  const { isLoggedIn } = useSelector((state) => state.auth);

  // const { state } = useContext(CartContext);
  const [isExpanded, setIsExpanded] = useState(localStorage.getItem(STORAGE_KEY) || true);
  const [isVisible, setIsVisible] = useState(false);
  const [fetchData] = useHttp({
    url: FIRE_DB_RECENT_MEALS,
  });

  const onToggleExpandClick = () => {
    setIsExpanded((isExpanded) => (isExpanded = !isExpanded));
  };

  const onAddToCartClick = () => {
    // dispatch(mergeRecentWithCart());
    // dispatch(clearRecent());
  };

  const onRemoveMealClick = (id) => {
    // dispatch(removeMealFromRecent(id));
  };

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (storedData) {
      setIsExpanded(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isExpanded);
  }, [isExpanded]);

  // useEffect(() => {
  //   if (state.recentItems.length === 0) {
  //     setIsVisible(false);
  //   }
  // }, [state.recentItems]);

  // useEffect(() => {
  //   fetchData().then((response) => {
  //     if (response) {
  //       const data = transformData(response);

  //       if (!data?.length) return;

  //       setIsVisible(true);
  //       dispatch(addRecentMeals(data));
  //     }
  //   });
  // }, []);

  return (
    <section
      className={`${styles.recent} ${isExpanded && styles.expanded} ${
        isVisible && isLoggedIn && styles.visible
      }`}>
      <Button handler={onToggleExpandClick} config={{ className: styles["head-button"] }}>
        <span className={styles["head-button__title"]}>Last time you ordered:</span>
      </Button>
      <Card>
        <ul className={styles.list}>
          {/* {state.recentItems.map((meal) => {
            return (
              <Meal key={meal.id} {...meal}>
                <Button
                  handler={() => onRemoveMealClick(meal.id)}
                  config={{ className: styles["recent-items-remove"] }}>
                  &#9587;
                </Button>
              </Meal>
            );
          })} */}
        </ul>
        <div className={styles.buttons}>
          <Button
            handler={onToggleExpandClick}
            config={{ className: styles["recent-items-button"] }}>
            Close
          </Button>
          <Button
            handler={onAddToCartClick}
            config={{ className: styles["recent-items-button"] }}>
            Order again!
          </Button>
        </div>
      </Card>
    </section>
  );
});

export { RecentItems };

import { useContext, useEffect, useState } from "react";
import { addRecentMeals } from "../../actions/actions";
import { FIRE_DB_URL } from "../../constants/constants";
import { CartContext, DispatchContext } from "../../context/context";
import { useHttp } from "../../hooks/hooks";
import { Meal } from "../meal/meal";
import { Button } from "../UI/button";
import { Card } from "../UI/card";

import styles from "./recent-items.module.css";

const RecentItems = () => {
  const { state } = useContext(CartContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [{ isLoading }, fetchData] = useHttp({
    url: FIRE_DB_URL,
  });
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    fetchData().then((response) => {
      if (!response?.length) return;

      setIsVisible(true);
      dispatch(addRecentMeals(response));
    });
  }, []);

  const onToggleExpandClick = () => {
    setIsExpanded((isExpanded) => (isExpanded = !isExpanded));
  };

  return (
    <section
      className={`${styles.recent} ${isExpanded && styles.expanded} ${
        isVisible && styles.visible
      }`}>
      <Button handler={onToggleExpandClick} config={{ className: styles["head-button"] }}>
        <span className={styles["head-button__title"]}>Last time you ordered:</span>
      </Button>
      <Card>
        <ul className={styles.list}>
          {state.recentItems.map((meal) => {
            return (
              <Meal key={meal.id} {...meal}>
                <Button config={{ className: styles["recent-items-remove"] }}>
                  &#9587;
                </Button>
              </Meal>
            );
          })}
        </ul>
        <div className={styles.buttons}>
          <Button
            handler={onToggleExpandClick}
            config={{ className: styles["recent-items-button"] }}>
            Close
          </Button>
          <Button config={{ className: styles["recent-items-button"] }}>
            Order again!
          </Button>
        </div>
      </Card>
    </section>
  );
};

export { RecentItems };

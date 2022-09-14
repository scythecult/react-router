// TODO reminder, брать данные из базы и выводить их при первой загрузке приложения с формулировкой "в прошлый раз вы заказывали"
// * как вариант можно сделать самозакрывющимся

import { useContext, useEffect, useState } from "react";
import { addRecentMeals } from "../../actions/actions";
import { FIRE_DB_URL } from "../../constants/constants";
import { CartContext, DispatchContext } from "../../context/context";
import { useHttp } from "../../hooks/hooks";
import { transformData } from "../../utils/utils";
import { Meal } from "../meal/meal";
import { Button } from "../UI/button";
import { Card } from "../UI/card";

import styles from "./recent-items.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const RecentItems = () => {
  const { state } = useContext(CartContext);
  const [isExpanded, setIsExpanded] = useState(true);
  const [{ isLoading }, fetchData] = useHttp({
    url: FIRE_DB_URL,
  });
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    fetchData().then((response) => {
      console.log(response);
      dispatch(addRecentMeals(response));
    });
  }, []);

  console.log(isLoading);
  const onToggleExpandClick = () => {
    setIsExpanded((isExpanded) => (isExpanded = !isExpanded));
  };

  return (
    <section className={`${styles.recent} ${isExpanded && styles.expanded}`}>
      <Button handler={onToggleExpandClick} config={{ className: styles["head-button"] }}>
        <span className={styles["head-button__title"]}>Last time you ordered:</span>
      </Button>
      <Card>
        <ul className={styles.list}>
          {DUMMY_MEALS.map((meal) => {
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

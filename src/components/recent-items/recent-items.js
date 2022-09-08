// TODO reminder, брать данные из базы и выводить их при первой загрузке приложения с формулировкой "в прошлый раз вы заказывали"
// * как вариант можно сделать самозакрывющимся

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
  return (
    <section className={styles.recent}>
      <Button config={{ className: styles["head-button"] }}>
        <span className={styles["head-button__title"]}>Last time you ordered:</span>
      </Button>
      <Card>
        <ul className={styles.list}>
          {DUMMY_MEALS.map((meal) => {
            return <Meal key={meal.id} {...meal} />;
          })}
        </ul>
        <div className={styles.buttons}>
          <Button config={{ className: styles["recent-items-button"] }}>
            Order again!
          </Button>
          <Button config={{ className: styles["recent-items-button"] }}>Close</Button>
        </div>
      </Card>
    </section>
  );
};

export { RecentItems };

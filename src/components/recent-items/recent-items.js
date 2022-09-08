// TODO reminder, брать данные из базы и выводить их при первой загрузке приложения с формулировкой "в прошлый раз вы заказывали"
// * как вариант можно сделать самозакрывющимся

import { Meal } from "../meal/meal";
import { Button } from "../UI/button";
import { Card } from "../UI/card";

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
    <section className="recent">
      <div className="head">
        <h2 className="title">Last time you ordered:</h2>
      </div>
      <Card>
        <ul className="list">
          {DUMMY_MEALS.map((meal) => {
            return <Meal key={meal.id} {...meal} />;
          })}
        </ul>
        <div className="buttons">
          <Button config={{ className: "zalupa" }}>Order again!</Button>
          <Button config={{ className: "zalupa" }}>Close</Button>
        </div>
      </Card>
    </section>
  );
};

export { RecentItems };

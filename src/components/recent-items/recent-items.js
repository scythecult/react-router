import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FIRE_DB_RECENT_MEALS } from "../../constants/constants";
import { mergeProducts } from "../../features/products/product-slice";
import {
  addRecentProducts,
  clearRecentProducts,
  removeRecentProduct,
} from "../../features/recent/recent-slice";
import { useHttp, useStorage } from "../../hooks/hooks";
import { Meal } from "../meal/meal";
import { Button } from "../UI/button";
import { Card } from "../UI/card";

import styles from "./recent-items.module.css";

const RecentItems = React.memo(() => {
  const STORAGE_KEY = "isExpanded";
  const dispatch = useDispatch();
  const { recentProducts } = useSelector((state) => state.recent);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isExpanded, setIsExpanded] = useStorage(STORAGE_KEY);
  const [isVisible, setIsVisible] = useState(false);
  const [updateRecentProducts] = useHttp({ url: FIRE_DB_RECENT_MEALS, method: "PUT" });
  const [getRecentProducts] = useHttp({
    url: FIRE_DB_RECENT_MEALS,
  });

  const onToggleExpandClick = () => {
    setIsExpanded((isExpanded) => (isExpanded = !isExpanded));
  };

  const onAddToCartClick = () => {
    dispatch(mergeProducts(recentProducts));
    dispatch(clearRecentProducts());
  };

  const onRemoveProductClick = (id) => {
    dispatch(removeRecentProduct(id));
  };

  useEffect(() => {
    getRecentProducts().then((response) => {
      if (response) {
        if (!response?.length) return;

        setIsVisible(true);
        dispatch(addRecentProducts(response));
      }
    });
  }, []);

  useEffect(() => {
    if (recentProducts.length === 0) {
      setIsVisible(false);
    }

    updateRecentProducts(recentProducts);
  }, [recentProducts]);

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
          {recentProducts.map((product) => {
            return (
              <Meal key={product.id} {...product}>
                <Button
                  handler={() => onRemoveProductClick({ id: product.id })}
                  config={{ className: styles["recent-items-remove"] }}>
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

const getCartQuantity = (items) => {
  return items.reduce((initital, current) => {
    initital += current.quantity;

    return initital;
  }, 0);
};

const transformObject = (object) => {
  return Object.values(object);
};

const transformCartData = (cartData) => {
  const transformed = transformObject(cartData);
  // находим уникальные id
  const uniqueKeys = transformed.reduce(
    (initial, current) => ({ ...initial, [current.id]: "" }),
    {}
  );

  // добавляем к ним соотв. элементы
  for (let item of transformed) {
    if (item.id in uniqueKeys) {
      uniqueKeys[item.id] = transformed.filter((innerItem) => innerItem.id === item.id);
    }
  }

  // вычисляем количество уникальных элементов
  const calculated = Object.values(uniqueKeys).reduce((calculatedAcc, value) => {
    const quantity = value.reduce((initial, current) => (initial += current.quantity), 0);
    const props = value.reduce((initial, current) => ({ ...initial, ...current }), {});

    calculatedAcc.push({ ...props, quantity });

    return calculatedAcc;
  }, []);

  return calculated;
};

const transformData = (data = {}) => {
  const transformed = [];
  const items = transformObject(data);

  for (const values of items) {
    if (!Array.isArray(values)) return [];
    transformed.push(...values);
  }

  const uniqueItems = Object.values(
    transformed.reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {})
  );

  return uniqueItems;
};

export { getCartQuantity, transformData, transformObject, transformCartData };

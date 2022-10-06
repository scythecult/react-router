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
  const initial = [...transformObject(cartData)];
  const reduced = [];
  const matches = {};

  for (let i = 0; i < initial.length; i++) {
    const item = initial[i];

    for (let j = i + 1; j < initial.length; j++) {
      const nextItem = initial[j];

      if (item.id === nextItem.id) {
        const merged = {
          ...item,
          quantity: item.quantity + nextItem.quantity,
        };
        matches[item.id] = item.id;
        initial.splice(j, 1);
        reduced.push(merged);
      }
    }
  }

  const unique = initial.filter((item) => matches[item.id] !== item.id);

  return [...reduced, ...unique];
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

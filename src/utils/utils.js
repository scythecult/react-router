const getCartQuantity = (items) => {
  return items.reduce((initital, current) => {
    initital += current.quantity;

    return initital;
  }, 0);
};

const transformObject = (object) => {
  return Object.values(object);
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

export { getCartQuantity, transformData, transformObject };

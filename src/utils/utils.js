const getCartQuantity = (items) => {
  return items.reduce((initital, current) => {
    initital += current.quantity;

    return initital;
  }, 0);
};

const transformData = (data = {}) => {
  const transformed = [];

  for (const values of Object.values(data)) {
    if (!Array.isArray(values)) return [];
    transformed.push(...values);
  }

  const uniqueItems = Object.values(
    transformed.reduce((acc, obj) => ({ ...acc, [obj.id]: obj }), {})
  );

  return uniqueItems;
};

export { getCartQuantity, transformData };

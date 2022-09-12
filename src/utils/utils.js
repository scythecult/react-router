const getCartQuantity = (items) => {
  return items.reduce((initital, current) => {
    initital += current.quantity;

    return initital;
  }, 0);
};

const transformData = (data = {}) => {
  const transformed = [];

  for (const values of Object.values(data)) {
    if (!Array.isArray(values)) return;

    transformed.push(...values);
  }

  return transformed;
};

export { getCartQuantity, transformData };

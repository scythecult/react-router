const getCartQuantity = (items) => {
  return items.reduce((initital, current) => {
    initital += current.quantity;

    return initital;
  }, 0);
};

export { getCartQuantity };

const formatDate = (date = new Date()) => {
  if (date instanceof Date) {
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();

    return { month, day, year };
  }
};

const createExpense = ({ date, title, amount }) => {
  return {
    key: date.toLocaleString(),
    date: new Date(date),
    title,
    price: amount.toLocaleString(),
  };
};

export { formatDate, createExpense };

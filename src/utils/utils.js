const createQuote = (payload) => {
  return {
    ...payload,
    id: `${payload.author}${Date.now()}`,
    comments: [],
  };
};

const findItem = (items = [], author = "") => {
  return items.find((item) => item.author.toLowerCase() === author.toLowerCase());
};

export { createQuote, findItem };

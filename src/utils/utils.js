const createQuote = (payload) => {
  return {
    ...payload,
    id: `${payload.authtor}${Date.now()}`,
  };
};

const findItem = (items = [], author = "") => {
  return items.find((item) => item.author.toLowerCase() === author.toLowerCase());
};

export { createQuote, findItem };

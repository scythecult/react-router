const createId = (item = 1945) => {
  return `${item}${Date.now()}`;
};

const createQuote = (payload) => {
  return {
    ...payload,
    id: createId(payload.author),
    comments: [],
  };
};

const findItem = (items = [], author = "") => {
  return items.find((item) => item.author.toLowerCase() === author.toLowerCase()) || [];
};

const transformObject = (items) => Object.values(items);

const transformResponse = (response) => {
  return transformObject(response).map((value, index) => ({
    ...value,
    id: createId(`${value.author}${index}`),
    comments: [],
  }));
};

export { createQuote, findItem, transformResponse, transformObject };

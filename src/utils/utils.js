const createQuote = (payload) => {
  return {
    ...payload,
    id: `${payload.authtor}${Date.now()}`,
  };
};

export { createQuote };

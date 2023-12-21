module.exports = {
  routes: [
    {
      method: "GET",
      path: "/searchs-keyword",
      handler: "searchs-keyword.searchsKeyword",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
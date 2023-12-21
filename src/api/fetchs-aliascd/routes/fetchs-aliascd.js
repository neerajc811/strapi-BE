module.exports = {
  routes: [
    {
      method: "GET",
      path: "/fetchs-aliascd",
      handler: "fetchs-aliascd.fetchsAliascd",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/fetchs-images",
      handler: "fetchs-images.fetchsImages",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
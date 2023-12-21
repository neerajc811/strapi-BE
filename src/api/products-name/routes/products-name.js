module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products-name",
      handler: "products-name.productsName",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
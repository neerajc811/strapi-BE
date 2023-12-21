module.exports = {
  routes: [
    {
      method: "GET",
      path: "/buyers-sku",
      handler: "buyers-sku.buyersSku",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
module.exports = {
  async productsName(ctx, next) {
    try {
      const data = await strapi
        .service("api::products-name.products-name")
        .productsName();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
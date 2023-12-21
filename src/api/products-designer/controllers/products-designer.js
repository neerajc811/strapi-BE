module.exports = {
  async productsDesigner(ctx, next) {
    try {
      const data = await strapi
        .service("api::products-designer.products-designer")
        .productsDesigner();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
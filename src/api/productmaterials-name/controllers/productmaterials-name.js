module.exports = {
  async productmaterialsName(ctx, next) {
    try {
      const data = await strapi
        .service("api::productmaterials-name.productmaterials-name")
        .productmaterialsName();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
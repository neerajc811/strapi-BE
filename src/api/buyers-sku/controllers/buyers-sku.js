module.exports = {
  async buyersSku(ctx, next) {
    try {
      const data = await strapi
        .service("api::buyers-sku.buyers-sku")
        .buyersSku();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
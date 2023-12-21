module.exports = {
  async madesBy(ctx, next) {
    try {
      const data = await strapi
        .service("api::mades-by.mades-by")
        .madesBy();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
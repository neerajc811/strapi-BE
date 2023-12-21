module.exports = {
  async fetchsAliascd(ctx, next) {
    try {
      const data = await strapi
        .service("api::fetchs-aliascd.fetchs-aliascd")
        .fetchsAliascd();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
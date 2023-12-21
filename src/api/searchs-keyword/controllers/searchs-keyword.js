module.exports = {
  async searchsKeyword(ctx, next) {
    try {
      const data = await strapi
        .service("api::searchs-keyword.searchs-keyword")
        .searchsKeyword();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
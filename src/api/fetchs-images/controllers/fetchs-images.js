module.exports = {
  async fetchsImages(ctx, next) {
    try {
      const data = await strapi
        .service("api::fetchs-images.fetchs-images")
        .fetchsImages();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
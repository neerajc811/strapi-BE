module.exports = {
    fetchsImages: async () => {
      try {
        // fetching data
        const entries = await strapi.entityService.findMany(
          "api::product.product",
          {
            fields: ["id", "ProductId","ProductName"],
            populate: {
                CoverImage: {
                fields: ["name", "url"],
              }
            },
          }
        );
  
        // reduce the data to the format we want to return
        let entriesReduced;
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.reduce((acc, item) => {
            console.log(item);
            acc = acc || [];
            acc.push({
              id: item.id, 
              imageurl: item.CoverImage?.url || "",
            });
            return acc;
          }, []);
        }
  
        // return the reduced data
        return entriesReduced;
      } catch (err) {
        return err;
      }
    },
  };
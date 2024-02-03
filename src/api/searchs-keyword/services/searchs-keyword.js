module.exports = {
    searchsKeyword: async () => {
      try {
        // fetching data
        const entries = await strapi.entityService.findMany(
          "api::product.product",
          {
            fields: ["id", "SearchKeyword"],
            // populate: {
            //   author: {
            //     fields: ["name", "email"],
            //   },
            //   category: {
            //     fields: ["name"],
            //   },
            // },
          }
        );
  
        // reduce the data to the format we want to return
        let entriesReduced;
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.reduce((acc, item) => {
            acc = acc || [];
            acc.push({
              id: item.id,
              SearchKeyword: item.SearchKeyword || "",
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
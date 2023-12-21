module.exports = {
    productmaterialsName: async () => {
      try {
        // fetching data
        const entries = await strapi.entityService.findMany(
          "api::product.product",
          {
            fields: ["id"],
            populate: {
                ProductionDetails: {
                fields: ["MaterialNm", "MaterialCode"],
              },
            },
          }
        );
  
        // reduce the data to the format we want to return
        let entriesReduced;
        if (entries && Array.isArray(entries)) {
          entriesReduced = entries.reduce((acc, item) => {
            acc = acc || [];
            acc.push({
              id: item.id,
              matnm: item.ProductionDetails?.MaterialNm || "",
              matcd: item.ProductionDetails?.MaterialCode || "",
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
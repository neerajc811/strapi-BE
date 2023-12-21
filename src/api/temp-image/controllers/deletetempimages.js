'use strict';

/**
 * A set of functions called "actions" for `deletetempimages`
 */


module.exports = {
   async deletetempImages (ctx, next){
    
    const entity=await strapi.services.deletetempImages.delete(MainImgId);
   
  }
};

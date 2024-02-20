'use strict';

/**
 * temp-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::temp-product.temp-product');

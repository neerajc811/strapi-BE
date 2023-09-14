'use strict';

/**
 * temp-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::temp-image.temp-image');

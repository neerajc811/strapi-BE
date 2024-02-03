'use strict';

/**
 * fair-master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fair-master.fair-master');

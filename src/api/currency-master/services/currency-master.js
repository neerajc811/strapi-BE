'use strict';

/**
 * currency-master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::currency-master.currency-master');

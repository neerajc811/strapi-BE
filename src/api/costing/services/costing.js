'use strict';

/**
 * costing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::costing.costing');

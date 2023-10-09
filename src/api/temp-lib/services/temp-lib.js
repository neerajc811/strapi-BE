'use strict';

/**
 * temp-lib service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::temp-lib.temp-lib');

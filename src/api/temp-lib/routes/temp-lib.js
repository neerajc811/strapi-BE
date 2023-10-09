'use strict';

/**
 * temp-lib router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::temp-lib.temp-lib');

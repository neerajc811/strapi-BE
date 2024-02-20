'use strict';

/**
 * season-master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::season-master.season-master');

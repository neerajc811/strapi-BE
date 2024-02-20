'use strict';

/**
 * shape-master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shape-master.shape-master');

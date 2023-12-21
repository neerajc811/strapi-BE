'use strict';

/**
 * client-login service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-login.client-login');

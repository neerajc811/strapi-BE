'use strict';

/**
 * client-login router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-login.client-login');

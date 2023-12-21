module.exports = {
  apps : [{
    name   : "B2B_STRAPI",
    script : "./config/server.js",
    autorestart: true,
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }]
}
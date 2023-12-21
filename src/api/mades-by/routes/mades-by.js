module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/mades-by',
     handler: 'mades-by.madesBy',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

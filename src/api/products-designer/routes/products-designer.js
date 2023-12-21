module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/products-designer',
     handler: 'products-designer.productsDesigner',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

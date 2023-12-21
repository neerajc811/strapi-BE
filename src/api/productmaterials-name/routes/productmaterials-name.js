module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/productmaterials-name',
     handler: 'productmaterials-name.productmaterialsName',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

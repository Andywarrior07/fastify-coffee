const {
  getCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
} = require('../controllers/coffees');

const routes = async (fastify, options) => {
  fastify.get('/api/coffees', getCoffees);

  fastify.get('/api/coffees/:id', getCoffeeById);

  fastify.post('/api/coffees', createCoffee);

  fastify.put('/api/coffees/:id', updateCoffee);

  fastify.delete('/api/coffees/:id', deleteCoffee);
};
module.exports = routes;

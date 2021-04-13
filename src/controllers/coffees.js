const Coffee = require('../models/coffee');

const getCoffees = async (request, reply) => {
  const coffees = await Coffee.find({ enabled: true });
  return reply.send(coffees);
};

const getCoffeeById = async (request, reply) => {
  const { id } = request.params;
  console.log(id);
  const coffee = await Coffee.findById(id);
  return reply.send(coffee);
};

const createCoffee = async (request, reply) => {
  const coffee = request.body;
  const newCoffee = new Coffee(coffee);
  await newCoffee.save();
  return reply.send(newCoffee);
};

const updateCoffee = async (request, reply) => {
  const { id } = request.params;
  const data = request.body;

  const coffee = await Coffee.findByIdAndUpdate(id, data, { new: true });
  return reply.send(coffee);
};

const deleteCoffee = async (request, reply) => {
  const { id } = request.params;

  const coffee = await Coffee.findByIdAndUpdate(
    id,
    { enabled: false },
    { new: true }
  );
  return reply.send(coffee);
};

module.exports = {
  getCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
};

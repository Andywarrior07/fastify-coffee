const { Schema, model } = require('mongoose');

const CoffeeSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  flavors: {
    type: [String],
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('Coffee', CoffeeSchema);

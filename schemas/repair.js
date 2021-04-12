const carSchema = require('./car');

module.exports = {
  type: 'object',
  required: ['concept', 'price'],
  properties: {
    id: { type: 'integer' },
    concept: { type: 'string' },
    detail: { type: 'string' },
    price: { type: 'number' },
    car: carSchema
  }
};

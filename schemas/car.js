const clientSchema = require('./client');

module.exports = {
  type: 'object',
  required: ['model', 'plate'],
  properties: {
    id: { type: 'integer' },
    model: { type: 'string' },
    plate: { type: 'string' },
    client: clientSchema
  }
};

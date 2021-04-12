const models = require('../../models');
const carSchema = require('../../schemas/car');

module.exports = {
  method: 'GET',
  url: '/cars/clientId/:clientId',
  schema: {
    params: {
      type: 'object',
      properties: {
        clientId: { type: 'number' },
      }
    },
    response: {
      200: {
        type: 'array',
        items: carSchema
      }
    }
  },
  handler: async function (req, reply) {
    try {
      result = await models.Cars.findAll({
        where: {
          clientId: req.params.clientId
        },
        include: [{
          model: models.Clients
        }]
      });
      reply.send(result);
    } catch (error) {
      request.log.error(error);
      reply.code(503);
      reply.send(error);
    }
  }
};

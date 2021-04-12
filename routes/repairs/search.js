const models = require('../../models');
const repairSchema = require('../../schemas/repair');

module.exports = {
  method: 'GET',
  url: '/repairs/carId/:carId',
  schema: {
    params: {
      type: 'object',
      properties: {
        carId: { type: 'number' },
      }
    },
    response: {
      200: {
        type: 'array',
        items: repairSchema
      }
    }
  },
  handler: async function (req, reply) {
    try {
      result = await models.Repairs.findAll({
        where: {
          carId: req.params.carId
        },
        include: [{
          model: models.Cars
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

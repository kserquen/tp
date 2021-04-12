const models = require('../../models');
const repairSchema = require('../../schemas/repair');

module.exports = {
  method: 'GET',
  url: '/repairs',
  schema: {
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
        order: [
          ['createdAt', 'DESC']
        ],
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

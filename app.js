const fastify = require('fastify')({
  logger: true,
});
const { dbConnection } = require('./src/database/config');

const connectDatabase = async () => {
  await dbConnection();
};

connectDatabase();

fastify.use(require('cors')());
fastify.register(require('./src/routes/coffees'));

fastify.listen(3001, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});

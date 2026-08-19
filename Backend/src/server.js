require("dotenv").config();

const app = require("./app");
const connectDatabase = require("./config/database");
const { connectRabbitMQ } = require("./config/rabbitmq");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDatabase();

  await connectRabbitMQ();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
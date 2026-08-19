const amqp = require("amqplib")

let channel

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost")

    channel = await connection.createChannel()

    console.log("RabbitMQ connected")
  } catch (error) {
    console.error("RabbitMQ connection failed:", error.message)
  }
}

const getChannel = () => {
  return channel
}

module.exports = {
  connectRabbitMQ,
  getChannel,
}
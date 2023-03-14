const { KafkaConsumer } = require("node-rdkafka");


const consumer = new KafkaConsumer({
  "group.id": "cloudkarafka-example",
  "bootstrap.servers": "pkc-129zv.me-south-1.aws.confluent.cloud:9092",
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "PLAIN",
  "sasl.username": "5NQIKJ3QRGYLWSR4",
  "sasl.password": "m1LTLAMxlvowugr5Vp9/Zo5zEugypK6RqM3DaoS5YDNOWvw++8XCAUAgGSGkajXF",
  "debug": "generic,broker,security"
});
const topic = "topic_0";

consumer.connect();
consumer
  .on("ready", (arg) => {
      consumer.subscribe([topic]).consume();
      console.log(`Consumer ${arg.name} ready. topics: ${topic}`);
  })
  .on("disconnected", (arg) =>
      console.log(`Consumer ${arg.name} disconnected.`)
  )
  .on("event.error", (err) => {
      console.error(err);
      process.exit(1);
  });
  consumer.on("data", function (msg) {
      console.log(msg.value.toString());
  });

module.exports = consumer;
// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

// const uuid = require("uuid");
// const { KafkaConsumer } = require("node-rdkafka");

// const consumer = new KafkaConsumer({
//   "group.id": "cloudkarafka-example",
//   "bootstrap.servers":"pkc-129zv.me-south-1.aws.confluent.cloud:9092",
//   "socket.keepalive.enable": true,
//   "security.protocol": "SASL_SSL",
//   "sasl.mechanisms": "PLAIN",
//   "sasl.username": "5NQIKJ3QRGYLWSR4",
//   "sasl.password": "m1LTLAMxlvowugr5Vp9/Zo5zEugypK6RqM3DaoS5YDNOWvw++8XCAUAgGSGkajXF",
//   "debug": "generic,broker,security"
// })
// const topic = `topic_0`;
// consumer.connect();
// consumer
//   .on("ready", (arg) => {
//     consumer.subscribe([topic]).consume();
//     console.log(`Consumer ${arg.name} ready. topics: ${topic}`);
//   })
//   .on("disconnected", (arg) =>
//     console.log(`Consumer ${arg.name} disconnected.`)
//   )
//   .on("event.error", (err) => {
//     console.error(err);
//     process.exit(1);
//   });

// module.exports = consumer;

// const kafkaConf = {
//   "group.id": "cloudkarafka-example",
//   "bootstrap.servers":"pkc-129zv.me-south-1.aws.confluent.cloud:9092",
//   "socket.keepalive.enable": true,
//   "security.protocol": "SASL_SSL",
//   "sasl.mechanisms": "PLAIN",
//   "sasl.username": "5NQIKJ3QRGYLWSR4",
//   "sasl.password": "m1LTLAMxlvowugr5Vp9/Zo5zEugypK6RqM3DaoS5YDNOWvw++8XCAUAgGSGkajXF",
//   "debug": "generic,broker,security"
// };

// // const prefix = "mo0oa5gi-";
// const topic = `topic_0`;
// const producer = new Kafka.Producer(kafkaConf);

// const genMessage = m => new Buffer.alloc(m.length,m);
//const prefix = process.env.CLOUDKARAFKA_USERNAME;

// const topics = [topic];
// const consumer = new KafkaConsumer(kafkaConf, {
//   "auto.offset.reset": "beginning"
// });

// consumer.on("error", function(err) {
//   console.error(err);
// });
// consumer.on("ready", function(arg) {
//   console.log(`Consumer ${arg.name} ready`);
//   consumer.subscribe(topics);
//   consumer.consume();
// });




// consumer.on("data", function(m) {
//  console.log(m.value.toString());
// });
// consumer.on("disconnected", function(arg) {
//   process.exit();
// });
// consumer.on('event.error', function(err) {
//   console.error(err);
//   process.exit(1);
// });
// consumer.on('event.log', function(log) {
//   console.log(log);
// });

// module.exports = consumer;


// const { KafkaConsumer } = require("node-rdkafka");
// require("dotenv").config();
const con = new KafkaConsumer({
  "group.id": "cloudkarafka-example",
  "bootstrap.servers":"pkc-129zv.me-south-1.aws.confluent.cloud:9092",
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "PLAIN",
  "sasl.username": "5NQIKJ3QRGYLWSR4",
  "sasl.password": "m1LTLAMxlvowugr5Vp9/Zo5zEugypK6RqM3DaoS5YDNOWvw++8XCAUAgGSGkajXF",
  "debug": "generic,broker,security"
});

// const topic = "topic_0";

// consumer.connect();
// consumer
//   .on("ready", (arg) => {
//     consumer.subscribe([topic]).consume();
//     console.log(`Consumer ${arg.name} ready. topics: ${topic}`);
//   })
//   .on("disconnected", (arg) =>
//     console.log(`Consumer ${arg.name} disconnected.`)
//   )
//   .on("event.error", (err) => {
//     console.error(err);
//     process.exit(1);
//   });

module.exports = KafkaConsumer;
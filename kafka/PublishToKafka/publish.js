// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const uuid = require("uuid");
const Kafka = require("node-rdkafka");

// use you own parameters
const kafkaConf = {
  "group.id": "cloudkarafka-example",
  "bootstrap.servers":"pkc-129zv.me-south-1.aws.confluent.cloud:9092",
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "PLAIN",
  "sasl.username": "5NQIKJ3QRGYLWSR4",
  "sasl.password": "m1LTLAMxlvowugr5Vp9/Zo5zEugypK6RqM3DaoS5YDNOWvw++8XCAUAgGSGkajXF",
  "debug": "generic,broker,security"
};

// const prefix = "mo0oa5gi-";
const topic = `topic_0`;
const producer = new Kafka.Producer(kafkaConf);

const genMessage = m => new Buffer.alloc(m.length,m);

producer.on("ready", function(arg) {
  console.log(`producer ${arg.name} ready.`); 
});
producer.connect();

module.exports.publish= function(msg)
{   
  m=JSON.stringify(msg);
  producer.produce(topic, -1, genMessage(m), uuid.v4());     
}
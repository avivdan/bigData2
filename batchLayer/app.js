const express = require('express');
const cors = require("cors");
const app = express();
const { KafkaConsumer } = require("node-rdkafka");

var server = require('http').createServer(app);

const port = 3001

//------------ kafka------------
// const kafkaConsumer = require("./ConsumeFromKafka/consume");
//until i figure out how to export consumer from file it will stay this way
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
//------------

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send("<a href='/send'>Send</a> <br/><a href=''>View</a>"));
// app.get('/send', (req, res) => {kafka.publish(generateOrder.generateOrder(), count++);res.send('message was sent')});



server.listen(port, () => console.log(`Ariel app listening at http://localhost:${port}`));



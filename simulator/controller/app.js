const express = require('express');
const app = express();
var server = require('http').createServer(app);
var count = 1;

const port = 3000

//------------ kafka------------
const kafka = require('../PublishToKafka/publish');
//------------
const generateOrder = require("../PublishToKafka/orderProd");


// function pubOrders(){
//     kafkaProducer.publish(generateOrder.generateOrder(), count++)
// }
// setInterval(pubOrders, 5000);

app.get('/', (req, res) => res.send("<a href='/send'>Send</a> <br/><a href=''>View</a>"));
app.get('/send', (req, res) => {kafka.publish(generateOrder.generateOrder(), count++);res.send('message was sent')});


server.listen(port, () => console.log(`Ariel app listening at http://localhost:${port}`));



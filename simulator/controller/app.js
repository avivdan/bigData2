const express = require('express');
const app = express();
var server = require('http').createServer(app);
var count = 0
const port = 3000

const { saveToDB, getOrders, Order } = require('../models/mongodb');
//------------ kafka------------
const kafka = require('../models/publish');
//------------
const {generateOrder, startData} = require("../models/orderProd");
const { stringify } = require('querystring');


// function pubOrders(){
//     kafkaProducer.publish(generateOrder.generateOrder(), count++)
// }
// setInterval(pubOrders, 5000);

app.get('/', (req, res) => res.send("<a href='/send'>Send</a> <br/><a href=''>View</a>"));
app.get('/send', async (req, res) => {
    var a = startData();
    console.log(stringify(a))
    //every x interval of time will do this 
    // var ord = generateOrder.generateOrder();
    // kafka.publish(ord);
    // saveToDB(ord);
    //every y intrval of time do this
    // var docs;
    // orderOut = "c88b3fb0-c4e4-11ed-8f24-27e9d440fec3"
    // let key = await Order.findOne({ order_id: orderOut }).exec();
    // let dateKey = new Date(key.Date).getMinutes() 


   
    // let newDate = new Date(Date()).getMinutes()
    // Order.findOneAndUpdate({ order_id: orderOut }, { status: "completed", finish_time: (newDate - dateKey) }).exec();//.then(doc => {
    //     // console.log("doc: ", doc);
    //     c = doc
    //     res.send(doc);

    // })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // const x = getOrders({order_id:"a14c7410-c4cf-11ed-b753-17a53c0956e3"})
    res.send("wish for the best")
});


server.listen(port, () => console.log(`Ariel app listening at http://localhost:${port}`));



// const { json } = require("docker/src/languages");
const { query } = require("express");
const mongoose = require("mongoose");
const { stringify } = require("querystring");
const { buffer } = require("stream/consumers");
const { Schema } = mongoose;
const username = "avivdani";
const password = "8VGdc8PkQCcfqK1m";
const cluster = "clusterbigdatacourse.px1b957";
const dbname = "pizzaSimulator";

// Order model
var Order = mongoose.model(
  "Order",
  mongoose.Schema({
    order_id: String,
    branch_id: Number,
    branch_name: String,
    area: String,
    Date: String,
    pizza_topping: [String],
    status: String,
    finish_time : Number,
  }), "orderSync"
); 


mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const a = mongoose.connection;
a.on("error", console.error.bind(console, "connection error: "));
a.once("open", function () {
  console.log("Connected successfully");
});

const saveToDB = async (order) => {
  const newOrder = Order(order);
  newOrder.save().then(doc => {
    return doc;
  })
    .catch(err => {
      console.log(err);
    });
};

const getOrders = (query) => {
  Order.findOne(query).then(doc => {
    console.log(doc)
    return {aviv: "melech"};
  })
    .catch(err => {
      console.log(err);
    });
};

const getOrderAndUpdate = (queryFind, queryUpdate) => {
  Order.findOneAndUpdate(queryFind, queryUpdate).then(doc => {
    return doc;
  })
    .catch(err => {
      console.log(err);
    });
}

module.exports = { saveToDB, getOrders, getOrderAndUpdate, Order };

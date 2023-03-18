// const { json } = require("docker/src/languages");
const mongoose = require("mongoose");
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
  }),"orderSync"
);
// const db = mongoose.model('db', Order, "orderSync")

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
  const b  = a.db.collection("orderSync");

  b.deleteMany({});
// const QueryExec = () => {
//   let b_id = 7;
//   // return {
//   //     order_id: uuid.v1(),
//   //     branch_id: b_id,
//   //     branch_name: branches[b_id]["branch_name"],
//   //     area: branches[b_id]["branch_region"],
//   //     Date: Date(),
//   //     status: "proccessing",
//   //     pizza_topping: getRandomToppings(getRandomInt(4))
//   // };
//   Order.findOneAndUpdate({branch_id:b_id}).then(doc => {
//     console.log("doc: ", doc);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// };

// Order.findOne({status:"proccessing"}).then(doc => {
//   console.log("doc: ", doc);
// })
// .catch(err => {
//   console.log(err);
// });
// var docs = mongoose.model('docs', Order, "orderSync")

// const ord = new Order({
//   order_id: '3714be10-c4be-11ed-99e9-85c5b41fcbfd',
//   branch_id: 20,
//   branch_name: 'Ramla',
//   area: 'Central',
//   Date: 'Fri Mar 17 2023 14:21:16 GMT+0200 (Israel Standard Time)',
//   status: 'proccessing',
//   pizza_topping: [ 'mushrooms' ],
//   finish_time: null
// })
//   ord.save().then(doc => {
//     console.log("doc: ", doc);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ord.save()
// ord.save(function (err, book) {
//   if (err) return console.error(err);
//   console.log(book.name + " saved to bookstore collection.");
// });
// Order.findOneAndUpdate({order_id:"b0ba5ca0-c38a-11ed-bb0a-f961a7fe2bba"},{status:"completed",finish_time: 3}).then(doc => {
//     console.log("doc: ", doc);
//   })
//   .catch(err => {
//     console.log(err);
// });

  // Order.deleteMany({});
});
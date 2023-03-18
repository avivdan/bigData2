const { searchDocuments } = require("../models/elasticSearch");

const getOrdersByDate = async (req, res) => {
  let orders = req.query.hasOwnProperty("branch")
    ? await searchDocuments(req.query)
    : await searchDocuments();
  orders = orders?.map((item) => ({
    branch_id: item.branch,
    Date: item.date,
    finish_time: item.handle_time,
    olives: item.pizza_topping.includes("olives") ? 1 : 0,
    pepper: item.pizza_topping.includes("pepper") ? 1 : 0,
    mushrooms: item.pizza_topping.includes("mushrooms") ? 1 : 0,
    onion: item.pizza_topping.includes("onion") ? 1 : 0,
    jalapinio: item.pizza_topping.includes("jalapinio") ? 1 : 0,
  }));
  orders?.length
    ? res.status(200).send(orders)
    : res.status(200).send({ message: "No Orders Found" });
};

// const getOrderReq = async (req,res) => {
//   let orders = req.query.hasOwnProperty("branch")
//     ? await searchDocuments(req.query)
//     : await searchDocuments();
//   orders = orders?.map((item) => ({
//     branch_id: item.branch,
//     Date: item.date,
//     finish_time: item.handle_time,
//     olives: item.pizza_topping.includes("olives") ? 1 : 0,
//     pepper: item.pizza_topping.includes("pepper") ? 1 : 0,
//     mushrooms: item.pizza_topping.includes("mushrooms") ? 1 : 0,
//     onion: item.pizza_topping.includes("onion") ? 1 : 0,
//     jalapinio: item.pizza_topping.includes("jalapinio") ? 1 : 0,
//   }));
//   orders?.length
//     ? res.status(200).send(orders)
//     : res.status(200).send({ message: "No Orders Found" });
// };

module.exports = { getOrdersByDate };

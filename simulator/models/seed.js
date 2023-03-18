// const uuid = require("uuid");

// //https://simplemaps.com/data/world-cities
// cit = ["Jerusalem","Tel Aviv-Yafo","Haifa","Rishon LeZiyyon","Petah Tiqwa","Ashdod","Netanya","Beersheba","Bene Beraq","Holon","Ramat Gan","Bat Yam","Ashqelon","Rehovot","Bet Shemesh","Kefar Sava","Herzliyya","Nazareth","Raananna","Ramla","Givatayim","Hod HaSharon","Qiryat Ata","Rosh HaAyin","Umm el Fahm","Nes Ziyyona","Elad","Ramat HaSharon","Karmiel","Qiryat Ono","Ben Zakkay","Qiryat Bialik","Or Yehuda","Shefaram","Yehud","Givat Shemuel","Gedera","Et Tira","Gan Yavne","Kafr Qasim","Qalansuwa","Hadera","Modiin Makkabbim Reut","Lod","Rahat","Nahariyya","Eilat","Akko","Afula","Tiberias","Pardes Hanna Karkur","Et Taiyiba","Qiryat Mozqin","Qiryat Yam","Maalot Tarshiha","Zefat","Tamra","Dimona","Sakhnin","Netivot","Ofaqim","Migdal HaEmeq","Nesher","Arad","Kefar Yona","Tirat Karmel","Sederot","Qiryat Malakhi","Qiryat Shemona","Yoqneam Illit","Beer Yaaqov","Or Aqiva","Bet Shean","Majdal Shams","Jisr ez Zarqa","Omer","Buqata"]
// regions = ["Jerusalem","Tel Aviv","Haifa","Central","Central","Southern","Central","Southern","Tel Aviv","Tel Aviv","Tel Aviv","Tel Aviv","Southern","Central","Jerusalem","Central","Tel Aviv","Northern","Central","Central","Tel Aviv","Central","Haifa","Central","Haifa","Central","Central","Tel Aviv","Northern","Tel Aviv","Central","Haifa","Tel Aviv","Northern","Central","Central","Central","Central","Central","Central","Central","Haifa","Central","Central","Southern","Northern","Southern","Northern","Northern","Northern","Haifa","Central","Haifa","Haifa","Northern","Northern","Northern","Southern","Northern","Southern","Southern","Northern","Haifa","Southern","Central","Haifa","Southern","Southern","Northern","Northern","Central","Haifa","Northern","Northern","Haifa","Southern","Northern"]
// var arr = []

// for (let index = 0; index < cit.length; index++) {
//     arr.push(index+1)
// }

// var branches = new Map();
// for (let i = 0; i < cit.length; i++) {
//     branches[arr[i]]=  {
//         "branch_name" : cit[i],
//         "branch_region" : regions[i],
//         "open" : [8 + getRandomInt(3), 22 - getRandomInt(3)]
//     }
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function getRandomToppings(numberOfTopping) {
//     var items = ["olives", " pepper", "mushrooms", "jalapinio", "onion"];
//     var newItems = [];

//     for (var i = 0; i < numberOfTopping; i++) {
//         var idx = Math.floor(Math.random() * items.length);
//         newItems.push(items[idx]);
//         items.splice(idx, 1);
//     }

//     return newItems;
// }


// const generateOrder = () => {
//     let b_id = getRandomInt(cit.length);
//     return {
//         order_id: uuid.v1(),
//         branch_id: b_id,
//         branch_name: branches[b_id]["branch_name"],
//         area: branches[b_id]["branch_region"],
//         Date: Date(),
//         status: "proccessing",
//         pizza_topping: getRandomToppings(getRandomInt(4)),
//         finish_time : null, 
//     };
// };

// const finishOrder = (order_id) => {

//     // getOrderAndUpdate({order_id:order_id}, {})
//     return {
//         order_id: order_id,
//         branch_id: b_id,
//         branch_name: branches[b_id]["branch_name"],
//         area: branches[b_id]["branch_region"],
//         Date: Date(),
//         status: "proccessing",
//         pizza_topping: getRandomToppings(getRandomInt(4)),
//         finish_time : getRandomInt(30 - getRandomInt(15)) + 14
//     };
// };


// const start_data = () =>{
//     let arr = []
//     for (let index = 0; index < cit.length; index++) {
//         let arr2 = []
//         for (let j = 0; j < getRandomInt(20).length; j++) {
//             arr2.push(arrfinishOrder(index))
//         }
//         arr.push(arr2)
//     }
//     return arr
// }

// module.exports = { generateOrder , finishOrder};
// // console.log(generateOrder())
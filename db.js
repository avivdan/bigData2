const { json } = require("docker/src/languages");
const mongoose = require("mongoose");
const username = "avivdani";
const password = "8VGdc8PkQCcfqK1m";
const cluster = "clusterbigdatacourse.px1b957";
const dbname = "pizzaSimulator";

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
  // const docs = collection.find();
  
  b.deleteMany({});
});


// const EventEmitter = require("events");
// const myEvent = new EventEmitter();

// myEvent.on("test-event", (data) => {
//   console.log("this event is listening");
//   console.log(JSON.stringify(data));
// });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const connectDB = require("./database/db");
app.use(bodyParser.json());
app.use(routes);
app.set("view engine", "pug");
const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
  });
});

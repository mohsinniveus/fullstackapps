const express = require("express");
const mongoose = require("mongoose")
const userRouter = require("./routes/user");
const bodyParser = require('body-parser');
var log4js = require("log4js");

log4js.configure({
  appenders: { nodeapi: { type: "file", filename: "output.log" } },
  categories: { default: { appenders: ["nodeapi"], level: "info" } }
});


//Starting point of server
function main() {
  const logger = log4js.getLogger("nodeapi");
  let app = express();
  const port = process.env.PORT || 5000;
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(bodyParser.json());

  mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => {
     console.log("Mongo database is connected....");
     logger.info("Mongo database is started....."); 
  });

  // Routes & Handlers
  app.use("/users", userRouter);

  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();
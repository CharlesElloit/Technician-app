const cors = require("cors");
const chalk = require("chalk");
const helmet = require("helmet");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

//requiring our enviroment variables
require("dotenv").config();

const technicianRoutes = require("./src/routes/technicianRouters");
const userRoutes = require("./src/routes/userRoutes");
const errorHandlers = require("./src/handlers/errorHandler");

//PORT variable
const PORT = process.env.PORT || 7777;

//Our Express Middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", PORT);
app.use(
  cors({
    origin: `http://localhost:${PORT}`
  })
);

/* 
  Connection to our Database and handling any bad connections errors.
*/
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => {
  if (error) {
    console.log(
      chalk.bold.red(
        `Oops samething went wrong with database connection\n${chalk.yellow(
          "Please make sure your're connected to the internet :)"
        )}`
      )
    );
    console.error(error.message);
  }
});

mongoose.connection.on("connected", () => {
  console.log(chalk.bold.green("\n" + "Connected to database Successfully!"));
});

//This is all of our endpoints for the application
app.use("/", technicianRoutes);
app.use("/", userRoutes);

/* 
  TODO::
    make sure all the error handlers are at the end of the file 
    becuz we want all the code to run first so if there is any error we can catch at the end.
*/

// If any of our routes didn't work, then we ganna 404 them and
// forward it to our error handler
app.use(errorHandlers.notFoundErrorHandler);

// If we are in development which we are then print the stack trace if
// there is any otherwise we are good.........
if (app.get("env") === "development") {
  // This will print all the stack trace if there is any.
  app.use(errorHandlers.developmentErrorsHandler);
}

// lets handle the production error  in w
app.use(errorHandlers.productionErrorsHandler);

//exporting our app
module.exports = app;

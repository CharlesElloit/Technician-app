const cors = require("cors");
const chalk = require("chalk");
const helmet = require("helmet");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const promisify = require("es6-promisify");
const app = express();

//requiring our enviroment variables
require("dotenv").config();

const technicianRoutes = require("./routes/technicianRouters");
const userRoutes = require("./routes/userRoutes")
const errorHandlers = require("./handlers/errorHandler");

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
  Connection to our Database and handling any bad connections 
  and enabling Promises to let us use async and await
  and on error we gonna display custom error for our self.
*/
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => {
  if (error) {
    console.error(
      chalk.bold.red(`Samething went wrong with database connection
  ${chalk.yellow("Please make sure your're connected to the internet :)")}
  ${error.message}`)
    );
  }
});

mongoose.connection.on("connected", () => {
  console.log(chalk.bold.green("\n" + "Connected to database Successfully!"));
});

//This promisify some callback based apis
// app.use((req, res, next) => {
//   req.login = promisify(req.login, req);
//   next();
// });

//This is all of our endpoints for the application
app.use("/", technicianRoutes);
app.use("/", userRoutes)

//Imports for all our model so we don't have to import it in every single
//file where we want to use them
require("./models/Techian.model");
require("./models/User.model");

/* 
  TODO::
    make sure all the error handlers are at the end of the file 
    becuz we wanna all the code to run so if there is any error we can catch at the end.
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

module.exports = app;

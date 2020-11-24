const http = require("http");
const chalk = require("chalk");
const app = require("./app");

const server = http.createServer(app);

// eslint-disable-next-line
const PORT = process.env.PORT || 7777;
app.set("port", PORT);

server.listen(PORT, () => {
  console.log(
    chalk.cyan(
      "\n" +
        `Application Server is currently running on -> address http://127.0.0.1:${PORT}
$ To stop the server press ctrl+c`
    )
  );
});

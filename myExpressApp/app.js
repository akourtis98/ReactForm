var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// Body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.use("/", indexRouter);
app.use("/routes/users", usersRouter);

var port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;

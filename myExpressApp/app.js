const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");

const usersRouter = require("./routes/users");

const app = express();

// Body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./config/keys.js").mongoURI;

// Connect to mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// cors
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.use("/routes/users", usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;

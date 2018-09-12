const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// Load Validation
const validateRegisterInput = require("../Validation/User-validation");

// Load User model
const User = require("../Models/User");

/* GET users. */
router.get("/get", (req, res) => {
  res.json([
    {
      id: 1,
      firstname: "Matt",
      lastname: "BBQ Brawlers"
    },
    {
      id: 2,
      firstname: "Peter",
      lastname: "BBQ Peter Brawlers"
    }
  ]);
});

/* Register user */
router.post("/add", (req, res) => {
  // const { errors, isValid } = validateRegisterInput(req.body);

  // // Check Validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
  });
});

module.exports = router;

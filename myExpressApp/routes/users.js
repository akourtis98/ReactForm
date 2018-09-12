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
  User.find()
    .sort({ date: -1 })
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nopostsfound: "No users found" }));
});

/* Register user */
router.post("/add", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newUser = new User();

  Object.keys(req.body).map(key => {
    newUser[key] = req.body[key];
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

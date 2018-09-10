var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
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

module.exports = router;

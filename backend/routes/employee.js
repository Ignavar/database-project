const express = require("express");
const router = express.Router();
const connect_to_db = require("../db");

const getId = require("../middleware/getId");
let db = connect_to_db();

router.post("/", getId, async (req, res) => {
  const empID = req.user;
  db.connect(function (error) {
    if (error) return res.status(500).json(error);
    db.query(
      "call GetEmployeeName('" + empID + "')",
      function (error, result, fields) {
        if (error) return res.status(500).json(error);
        const EmployeeName = result[0][0];
        res.status(200).json(EmployeeName);
      }
    );
  });
});
module.exports = router;

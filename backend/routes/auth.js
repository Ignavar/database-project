const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const connect_to_db = require("../db");
const jwt = require("jsonwebtoken");
const getId = require("../middleware/getId");

let db = connect_to_db();

const JWt = "Sougma Balls Bitch";

db.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

const salt = '$2b$10$FjjBRa6zvhpB0baOCILQw.';

router.post(
  "/",
  [
    body("username", "Username cannot be empty").exists(),
    body("username", "Username cannot be longer than 50 characters").isLength({
      max: 50,
    }),
    body("password", "Password cannot be blank").exists(),
    body("password", "Password cannot be longer than 50 characters").isLength({
      max: 50,
    }),
  ],
  async (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(400).json({ errors: erros.array() });
    }
    const { username, password } = req.body;
    const hash =  await bcrypt.hash(password,salt);
    db.connect(function (error) {
      if (error) return res.status(500).json(error);
        db.query(
          "call CheckAccount('" + username + "','" + hash + "')",
          function (error, result, fields) {
            if (error) return res.status(500).json(error);
            const {empID} = result[0][0];
            const {accountType} = result[0][0];
            if (empID == null) return res.status(400).json("Invalid Login credentials");
            const authtoken = jwt.sign(empID,JWt);
            res.json({authtoken,accountType});
          }
        );
    });
  }
);

router.post('/',getId,async(req,res) =>{
    
})

module.exports = router;

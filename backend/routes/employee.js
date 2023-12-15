const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const connect_to_db = require("../db");

const getId = require("../middleware/getId");

router.post('/',async(req,res)=>{
    
})
module.exports = router;
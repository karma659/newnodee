const express = require("express");
const  studentg = require("../controller/getstudentsdata"); 
const  studentp = require("../controller/poststudentdata");

const router = express.Router();

router.get('/', studentg.getStudents);
router.get('/:roll', studentg.getspecStudent);
router.post('/', studentp.createstudent);

module.exports=router;
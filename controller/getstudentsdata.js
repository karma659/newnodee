
const express= require('express');
const mongoose= require('mongoose');
const Student= require('../model/studentdata.js');

const getStudents = async (req, res) => {
    try {
        const student= await Student.find();
        
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


const getspecStudent = async (req,res) => {
    const roll = req.params.roll;
try {
        const stud = await Student.findOne({roll: roll});
res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

module.exports.getStudents= getStudents;
module.exports.getspecStudent= getspecStudent;
const express= require('express');
const mongoose= require('mongoose');
const Student= require('../model/studentdata.js');



const createstudent =  async (req, res) => {
    console.log(req.body);
    const newstudent = new Student({
        name:req.body.name,
        roll:req.body.roll,
        
})
    try {
        await newstudent.save();
res.status(201).json(newstudent);
} catch(error) {
        res.status(400).json({ message : error.message});
}
}

module.exports.createstudent= createstudent;
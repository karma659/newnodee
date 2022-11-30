const mongoose =require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
        unique: true,    
    }
   
})
var studentdata=mongoose.model('studentdata',studentSchema);
module.exports= studentdata;
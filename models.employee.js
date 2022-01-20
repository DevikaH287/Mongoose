var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    emp_name: {
        type : String,
        required : true
    },
    emp_id: {
        type : String,
        unique:true,
        required : true
    },
    email:{
    type: String,
    unique:true,
    required:true
    },
    emp_dept:{
        type:String,
        required:true
    },
    age:{
    type: Number,
    default:21
    },
    city:{
        type:String,
        required:true
    },

});

var employee = mongoose.model('EmployeeRegistration', UserSchema);

module.exports = employee;
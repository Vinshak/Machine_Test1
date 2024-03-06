const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    address:String,
    mobile:String
})
const EmpolyeeModel = mongoose.model("employees",EmployeeSchema)
module.exports = EmpolyeeModel;
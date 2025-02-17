const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true    
    },
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);
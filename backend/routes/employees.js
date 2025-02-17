const express = require('express');

const router = express.Router();

const employees = require('../models/employee');

//test
router.get('/test', (req, res) => res.send('employee route testing!'));

router.post("/", (req, res) => {
    employees.create(req.body)
        .then(()=>res.json({msg: "Employee added successfully"}))
        .catch(()=>res.status(400).json({msg: "Unable to add this employee"}));
});

router.get("/", (req, res) => {
    employees.find()
        .then(employees => res.json(employees))
        .catch(()=>res.status(400).json({msg: "No employees found"}));
});

router.get("/:id", (req, res) => {
    employees.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(()=>res.status(400).json({msg: "No employee found"}));
});

router.put("/:id", (req, res) => {
    employees.findByIdAndUpdate(req.params.id, req.body)
        .then(()=>res.json({msg: "Employee updated successfully"}))
        .catch(()=>res.status(400).json({msg: "Unable to update this employee"}));
});

router.delete("/:id", (req, res) => {
    employees.findByIdAndDelete(req.params.id)
        .then(()=>res.json({msg: "Employee deleted successfully"}))
        .catch(()=>res.status(400).json({msg: "Unable to delete this employee"}));
});


module.exports = router;
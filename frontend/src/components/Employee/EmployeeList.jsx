import React, {useEffect, useState} from 'react'
import axios from 'axios'
import EmployeeCard from "./EmployeeCard"
import './EmployeeList.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterdEmployees, setfilterdEmployees] = useState([]);

    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();

        const filterd = employees.filter((employee) => 
            employee.name.toLowerCase().includes(lowerCaseQuery) ||
            employee.address.toLowerCase().includes(lowerCaseQuery) ||
            employee.nic.toLowerCase().includes(lowerCaseQuery) ||
            employee.employeeID.toLowerCase().includes(lowerCaseQuery)

        );
        setfilterdEmployees(filterd);
    }, [searchQuery, employees]);


    useEffect(() => {
        axios.get('http://localhost:3000/api/employees/')
        .then(res => {
            setEmployees(res.data);
            setfilterdEmployees(res.data);
            console.log(res.data);
        })
        .catch(() => {
            console.log('Error getting employees');
        })
    }, []);

    const onDeleteClick = (id) =>{
        axios.delete(`http://localhost:3000/api/employees/${id}`).then(() =>{
            setEmployees(employees.filter(employee => employee._id!== id));
        }).catch((err) => {
          console.log("delete error", err);
        });
      }

      const genaratePDF = () => {
        const doc = new jsPDF();

        const tableColumn = ["Employee Name", "Employee ID", "Address", "NIC"];
        const tableRows = [];

        filterdEmployees.forEach(employee => {
            const employeeData = [
                employee.name,
                employee._id,
                employee.address,
                employee.nic,
            ];
            tableRows.push(employeeData);
        });
        doc.autoTable(tableColumn, tableRows, {startY: 20});
        doc.text("Employee List", 14, 15);
        doc.save("EmployeeList.pdf");
    }


    const employeesList = filterdEmployees.length === 0 ? "No employees available" : filterdEmployees.map((employee) => ( <EmployeeCard key={employee.id} employee = {employee} onDelete = {onDeleteClick}/>));


  return (
    <div className="show_EmployeeList">
        <div className="container">
            <div className="search-bar">
                <input type="text" placeholder="Search employee..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>
            <div className="button">
                <button onClick={genaratePDF}>Download PDF</button>
            </div>
            <div className="list">{employeesList}</div>
        </div>
    </div>
  )
}

export default EmployeeList

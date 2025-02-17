import React, {useState} from 'react'
import './InsertEmployee.css'
import axios from 'axios'

function InsertEmployee() {

    const [employeeData, setEmployeeData] = useState({
        employeeID: '',
        name: '',
        address: '',
        nic: ''
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({...employeeData, [name]: value });
        console.log(employeeData);
      };

        const handleSubmit = (e) => {
            e.preventDefault();
            axios.post('http://localhost:3000/api/employees', employeeData)
             .then(() => {
                setEmployeeData({
                    employeeID: '',
                    name: '',
                    address: '',
                    nic: ''
                });
            });  
        };
  return (
    <div>
      <h2>Employee Insert Page</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="employeeID">Employee ID:</label>
        <input type="text" id="employeeID" name="employeeID" onChange={handleChange} value={employeeData.employeeID} required />
        <br />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={employeeData.name} required />
        <br />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" onChange={handleChange} value={employeeData.address} required />
        <br />
        <label htmlFor="nic">NIC:</label>
        <input type="text" id="nic" name="nic" onChange={handleChange} value={employeeData.nic} required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default InsertEmployee

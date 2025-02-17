import React, {useState, useEffect} from 'react'
import "./InsertEmployee.css"
import axios from 'axios';
import { Link, useParams, useNavigate } from'react-router-dom';

function UpdateEmployee() {

  const [employee, setEmployee] = useState({
    employeeID: '',
    name: '',
    address: '',
    nic: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/employees/${id}`).then((res) => {
      setEmployee({
        employeeID: res.data.employeeID,
        name: res.data.name,
        address: res.data.address,
        nic: res.data.nic
      });
    })
    .catch((err) => {
       console.log(err);
     });
     }, [id]);

     const onChange = (e) => {
      console.log(e.target.value);
      setEmployee({...employee, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
      e.preventDefault();

      const data = {
        employeeID: employee.employeeID,
        name: employee.name,
        address: employee.address,
        nic: employee.nic
      };
      
      axios.put(`http://localhost:3000/api/employees/${id}`, data)
       .then((res) => {
          navigate(`/showdetails/${id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <div>
      <h1>Update Employee</h1>
      <form noValidate onSubmit={onSubmit}>
        <label>
          Employee ID:
          <input type="text" name="employeeId" value={employee.employeeID} onChange={onChange} />
        </label>
        <br />
        <label>
          Name :
          <input type="text" name="name" value={employee.name} onChange={onChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={employee.address} onChange={onChange}/>
        </label>
        <br />
        <label>
          NIC :
          <input type="text" name="nic" value={employee.nic} onChange={onChange}/>
        </label>
        <br />
        <button type="submit">Update Employee</button>
        <Link to={"/"}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  )
}

export default UpdateEmployee

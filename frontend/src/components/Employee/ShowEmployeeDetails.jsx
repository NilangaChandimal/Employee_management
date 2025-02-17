import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ShowEmployeeDetails() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/employees/${id}`)
      .then((res) => {
        setEmployee(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const TableItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <th scope="row">Employee ID</th>
            <td>{employee.employeeID}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <th scope="row">Name</th>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <th scope="row">Address</th>
            <td>{employee.address}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <th scope="row">NIC</th>
            <td>{employee.nic}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <div className="showEmployeeDetails">
      <div className="col-md-10 m-auto">
        <div className="row">
          <div className="col-md-6">
            <h2>Employee Details</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">{TableItem}</div>
        </div>
        <div className="col-md-6">
          <Link to="/" className="btn btn-outline-primary float-right">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShowEmployeeDetails;

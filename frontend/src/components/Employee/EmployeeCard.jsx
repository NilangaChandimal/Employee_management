import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeCard({employee, onDelete}) {

  const handleDelete = () => {
    onDelete(employee._id);
  }

  const onEditClick = (id) => {
    window.location.href = `/editdetails/${id}`;
  }


  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://img.freepik.com/free-photo/3d-cartoon-portrait-person-practicing-law-related-profession_23-2151419550.jpg?t=st=1739798730~exp=1739802330~hmac=63132568910fb3725852adb64b51756e602c9f66cb8443f96f776644d77ad0dc&w=740" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{employee.name}</h5>
        <p className="card-text">
          {employee.employeeID}
          <br />
          {employee.address}
          <br />
          {employee.nic}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-3">
        <button size="medium" className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
        <button className="btn btn-outline-warning"><Link to={`/updatedetails/${employee._id}`}>Update</Link></button>
        <button className="btn btn-outline-success float-right"><Link to={`/showdetails/${employee._id}`}>Details</Link></button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;

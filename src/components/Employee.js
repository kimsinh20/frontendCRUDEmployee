import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import EmployeeApi from "../api/EmployeeApi";


function Employee(props) {
  const id = props.employeeItem.id;
  const firstName = props.employeeItem.firstName;
  const lastName = props.employeeItem.lastName;
  const email = props.employeeItem.email;
  const fetchEmployeeList=props.fetchEmployeeList;
       const deleteEmployee = (id) => {
          try {EmployeeApi.deleteEmployeeID(id).then(()=> {
             fetchEmployeeList();
          })
        }catch (error) {
          console.log("err: ", error);
        }
       }
  return (
    <table className="table">
      <tbody>
        <tr>
          <th scope="row">{id}</th>
          <th>{firstName}</th>
          <th>{lastName}</th>
          <th>{email}</th>
          <th>
            <Link to={`/update/${id}`} className="link btn btn-dark" >
              update
            </Link>
            <Link exact to={`/delete/${id}`} className="link btn btn-danger" onClick={(e)=>deleteEmployee(id)}>
              delete
            
            </Link>
          </th>
        </tr>
      </tbody>
    </table>
  );
}

export default Employee;

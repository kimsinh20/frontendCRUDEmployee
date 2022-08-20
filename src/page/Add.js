import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import EmployeeApi from "../api/EmployeeApi";
import { Link } from 'react-router-dom';

function Add() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const history = useHistory();

  const saveEmployee  = (e) => {
         e.preventDefault();
         const Employee = {firstName,lastName,email};
         const addFetchEmployee = async () => {
          try {
             await EmployeeApi.createEmployee(Employee).then((response)=> {
              console.log(response.data)
              history.push('/home')
         })
          } catch(error) {
            console.log("Failed to fetch product list: ", error);
          }
         }
         addFetchEmployee();
         console.log(Employee);
  }
  return (
    <div className="container">
        <form action="/home">
          <label className="">first Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            onChange={(e)=>setFirstName(e.target.value)}
            value={firstName}
          ></input>
          <label>last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="last name"
            aria-label="last name"
            onChange={(e)=>setLastName(e.target.value)}
            value={lastName}
          ></input>
          <label>email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            aria-label="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          ></input>
          <br></br>
          <button className="btn btn-success" onClick={(e)=>saveEmployee(e)}>add Employee</button>
          <Link to='/home' className='btn btn-danger'>
           cacel
          </Link>
          </form>
    </div>
  );
}

export default Add;

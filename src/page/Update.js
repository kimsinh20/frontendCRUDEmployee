import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory ,useParams} from "react-router-dom";
import EmployeeApi from "../api/EmployeeApi";
import { Link } from 'react-router-dom';

function Update() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const history = useHistory();
  const {id} = useParams();
  

  const saveEmployee  = (e) => {
         e.preventDefault();
         const Employee = {firstName,lastName,email};
         const updateFetchEmployee = async () => {
          try {
             await EmployeeApi.getUpdateEmployee(id,Employee).then((response)=> {
              console.log(response.data)
              history.push('/home')
         })
          } catch(error) {
            console.log("Failed to fetch product list: ", error);
          }
         }
         updateFetchEmployee();
  }
  useEffect(() => {
    const getID = async () => {
      try {
        await EmployeeApi.getEmployeeByID(id).then((response)=> {
        setFirstName(response.firstName);
        setLastName(response.lastName);
        setEmail(response.email);
        console.log(response)
       })
      } catch (error) {
        console.log("error: ", error);
      }
    }
    getID();
  }, [id]);
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

export default Update;

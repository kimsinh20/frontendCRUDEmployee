import { useEffect, useState } from "react";
import Employee from "../components/Employee";
import EmployeeApi from "../api/EmployeeApi";
import Colum from "../components/Colum";
function ListEmployee() {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    fetchEmployeeList();
  }, []);
  const fetchEmployeeList = async () => {
    try {
      const params = { _page: 1, _limit: 100 };
      const response = await EmployeeApi.getAll(params);
      console.log("Fetch products successfully: ", response);
      setEmployee(response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };
  return (
      <div className="App container">
        <Colum></Colum>
      {employees &&
        employees.map((employeeItem) => {
          return (
            <Employee
              employeeItem={employeeItem}
              key={employeeItem.id}
              fetchEmployeeList={fetchEmployeeList}
            ></Employee>
          );
        })}
        </div>
  
  );
}

export default ListEmployee;

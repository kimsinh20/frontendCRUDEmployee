import axiosClient from "./axiosClient";

const EmployeeApi = {
  getAll: (params) => {
    const url = "/employees";
    return axiosClient.get(url, { params });
  },
  createEmployee: (employee) => {
    const url = "/employees";
    return axiosClient.post(url, employee);
  },
  getEmployeeByID: (id) => {
    const url = "/employees/"+id;
    return axiosClient.get(url);
  },
  getUpdateEmployee:(id,employee) => {
    const url = "/employees/"+id;
    return axiosClient.put(url,employee);
  },
  deleteEmployeeID:(id) => {
const url = "/employees/"+id;
return axiosClient.delete(url);
  },
};
export default EmployeeApi;

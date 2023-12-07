import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getAllCustomers } from "../../data/customersData";
import { getAllEmployees } from "../../data/employeesData";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then(data => setEmployees(data));
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={`employee-${e.id}`}>
            <th scope="row">{e.id}</th>
            <td>{e.name}</td>
            <td>{e.specialty}</td>
            <td>
              <Link to={`${e.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

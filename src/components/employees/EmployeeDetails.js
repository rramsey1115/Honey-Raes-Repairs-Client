import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeById } from "../../data/employeesData";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  const getAndSetEmployeeById = (id) => { getEmployeeById(parseInt(id)).then(data => setEmployee(data))}

  useEffect(()=> {getAndSetEmployeeById(id)},[id]);

  if (!employee) { return null }

  return (
    <Table style={{margin: 20}}>
      <tbody>
        <tr>
          <th scope="row">Employee Id</th>
          <td>{`${employee?.id}`}</td>
        </tr>
        <tr>
          <th scope="row">Employee Name</th>
          <td>{`${employee?.name}`}</td>
        </tr>
        <tr>
          <th scope="row">Specialty</th>
          <td>{`${employee?.specialty}`}</td>
        </tr>
      </tbody>
    </Table>)
}

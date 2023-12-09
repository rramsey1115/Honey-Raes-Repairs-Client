import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getAllCustomers } from "../../data/customersData";

export const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers().then(setCustomers);
  }, []);

  return (
    <Table style={{margin: 20}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={`customer-${c.id}`}>
            <th scope="row">{c.id}</th>
            <td>{c.name}</td>
            <td>{c.address}</td>
            <td>
            <Link to={`${c.id}`}><Button color="warning" size="sm">Details</Button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

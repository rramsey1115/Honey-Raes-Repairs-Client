import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomerById } from "../../data/customersData";

export const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});

  const getAndSetCustomerById = (id) => { getCustomerById(parseInt(id)).then(data => setCustomer(data))}

  useEffect(()=> {getAndSetCustomerById(id)},[id]);

  if (!customer) { return null }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Customer Id</th>
          <td>{`${customer?.id}`}</td>
        </tr>
        <tr>
          <th scope="row">Customer Name</th>
          <td>{`${customer?.name}`}</td>
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td>{`${customer?.address}`}</td>
        </tr>
      </tbody>
    </Table>)
}

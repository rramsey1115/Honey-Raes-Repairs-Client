import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { getServiceTicketById } from "../../data/serviceTicketsData";
import { AssignEmployee } from "./AssignEmployee";

export default function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] = useState({});

  //add useEffect here to get the ticket details from the API
  const getAndSetTicketById = (id) => {
    getServiceTicketById(parseInt(id)).then(data => setTicket(data));
  }

  useEffect(()=> {
      getAndSetTicketById(id);
  }, []);

  if (!ticket) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Customer</th>
          <td>{`${ticket.customer?.name}`}</td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td>{`${ticket?.description}`}</td>
        </tr>
        <tr>
          <th scope="row">Emergency</th>
          <td>{ticket?.emergency ? "yes" : "no"}</td>
        </tr>
        <tr>
          <th scope="row">Employee</th>
          <td>{ticket.employee?.name || <AssignEmployee ticket={ticket} getAndSetTicketById={getAndSetTicketById}/>}</td>
        </tr>
        <tr>
          <th scope="row">Completed?</th>
          <td>{ticket.dateCompleted?.split("T")[0] || "Incomplete"}</td>
        </tr>
      </tbody>
    </Table>)
}

import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { copmleteTicket, deleteTicket, getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getAndSetTix();
  }, []);
  
  const getAndSetTix = () => {
    getServiceTickets().then(data => setTickets(data));
  }
  
  const handleDelete = async (ticketId) => {
    console.log("delete clicked for ", ticketId);
    await deleteTicket(ticketId * 1);
    getAndSetTix();
  }

  const handleComplete = async (ticketId) => {
    await copmleteTicket(ticketId * 1);
    getAndSetTix();
  }

  return (<>
    <Link to="/tickets/create">
      <Button color="primary" style={{marginLeft:20}}>Add New Ticket</Button>
    </Link>
    <Table style={{margin: 20}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th>Details</th>
          <th>Complete</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}><Button color="warning" size="sm">Details</Button></Link>
            </td>
            <td>
              {t.employeeId !== null &&
               t.dateCompleted === null ?
                <Button
                color="success"
                value={t.id}
                size="sm"
                onClick={(e) => handleComplete(e.target.value)}
                >Complete</Button>
                :
                null
              }
            </td>
            <td>
              <Button
                color="danger"
                value={t.id}
                size="sm"
                onClick={(e) => handleDelete(e.target.value)}
                >Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>);
}

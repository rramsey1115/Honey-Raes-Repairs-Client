import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { deleteTicket, getServiceTickets } from "../../data/serviceTicketsData";
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

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
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
              <Link to={`${t.id}`}>Details</Link>
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
  );
}

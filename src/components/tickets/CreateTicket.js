import { useEffect, useState } from "react";
import { getAllCustomers } from "../../data/customersData";

export default function CreateTicket() {
  const [customers, setCustomers] = useState([]);
  const [ticketObj, setTicketObj] = useState({
    description: "",
    customerId: 0,
    employeeId: null,
    emergenccy: false,
  });

  useEffect(()=> {
    getAllCustomers().then((data) => setCustomers(data))
  }, [])

  return (<form><br/>
    <h3>Submit a Ticket</h3><hr/>
    
    <fieldset>
      <label/><h5>Customer Submitting Ticket</h5>
        {customers.map(c => {
          return (<div key={c.id}>
              <input name="customer" type="radio"/> {c.name}
            </div>)
        })}
    </fieldset>
    <fieldset>
      <label/><h5>Description of Issue</h5>
      <textarea type="text"/>
    </fieldset>
    <fieldset>
      <label /><h5>Emergency?</h5>
      <div><input type="radio"/>True</div>
      <div><input type="radio"/> False</div>
    </fieldset>
  </form>)
}
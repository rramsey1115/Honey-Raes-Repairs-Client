import { useEffect, useState } from "react";
import { getAllCustomers } from "../../data/customersData";
import { postServiceTicket } from "../../data/serviceTicketsData";
import { useNavigate } from "react-router-dom";

export default function CreateTicket() {
  const [customers, setCustomers] = useState([]);
  const [newTicketObj, setNewTicketObj] = useState({
    description: "",
    customerId: 0,
    emergency: false,
  });

  const navigate = useNavigate();

  const handleTicketAdd = async () => {
    await postServiceTicket(newTicketObj);
    navigate('/tickets');
  }

  useEffect(()=> {
    newTicketObj.id = customers.length + 1;
  }, [customers, newTicketObj])

  useEffect(()=> {
    getAllCustomers().then((data) => setCustomers(data))
  }, [])

  return (<>
  <form><br/>
    <h3>Submit a Ticket</h3><hr/>
    
    <fieldset>
      <label/><h5>Customer Submitting Ticket</h5>
        {customers.map(c => {
          return (<div key={c.id}>
              <input 
                name="customer" 
                type="radio" 
                value={c.id}
                onChange={(e) => {
                  const copy = { ...newTicketObj };
                  copy.customerId = e.target.value * 1;
                  setNewTicketObj(copy);
                }}
              /> {c.name}
            </div>)
        })}
    </fieldset>
    <fieldset>
      <label/><h5>Description of Issue</h5>
      <textarea 
        type="text"
        onChange={(e) => {
          const copy = { ...newTicketObj };
          copy.description = e.target.value;
          setNewTicketObj(copy);
        }}
        />
    </fieldset>
    <fieldset>
      <label /><h5>Emergency?</h5>
      <div><input name="emergency" type="radio"/>True</div>
      <div><input defaultChecked name="emergency" type="radio"/> False</div>
    </fieldset>
  </form>
      {newTicketObj.customerId && newTicketObj.description
        ? <button onClick={handleTicketAdd}>Submit Ticket</button> 
        : <button disabled>Submit Ticket</button> 
      }
  </>)
}
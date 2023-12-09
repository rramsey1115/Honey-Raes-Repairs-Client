const _apiUrl = "/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getServiceTicketById = (ticketId) => {
  return fetch(`${_apiUrl}/${ticketId}`).then((r) => r.json());
};

// post a new service ticket
export const postServiceTicket = async (newTicketObj) => {
  const res = await fetch(`${_apiUrl}`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(newTicketObj)
  }).then(res => res.json());
  return res;
};

// delete a service ticket
export const deleteTicket = (ticketId) => {
  return fetch(`${_apiUrl}/${ticketId * 1}`, { method: "DELETE" });
}

// complete a ticket
export const copmleteTicket = async (ticketId) => {
   return fetch(`${_apiUrl}/${ticketId * 1}/complete`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(ticketId)})
}

// assign ticket to an employee
export const updateTicket = (ticketId, updatedTicketObj) => {
  return fetch(`${_apiUrl}/${ticketId}`, {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(updatedTicketObj)
  });
}
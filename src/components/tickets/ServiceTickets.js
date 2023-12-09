import { Outlet } from "react-router-dom";


export default function ServiceTickets() {
  return (<>
    <div style={{margin: 20}}>
      <h2>Service Tickets</h2>
      </div>
      <Outlet />
    </>
  );
}

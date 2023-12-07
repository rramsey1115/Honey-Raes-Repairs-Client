import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";

export default function Employees() {
  return (
    <>
      <h2>Employees</h2>
      {/* <Link to="/tickets/create"><Button>Add</Button></Link> */}
      <Outlet />
    </>
  );
}
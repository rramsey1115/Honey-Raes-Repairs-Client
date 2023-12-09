import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";

export default function Employees() {
  return (
    <>
      <div style={{margin: 20}}>
        <h2>Employees</h2>
      </div>
      <Outlet />
    </>
  );
}

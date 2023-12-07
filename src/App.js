import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar color="info" expand="sm">
        <Nav navbar>
          <NavbarBrand href="/">Honey Rae's Repairs </NavbarBrand>
          <NavItem>
            <NavLink href="/tickets">Service Tickets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/custoemrs">Customers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/employees">Employees</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;

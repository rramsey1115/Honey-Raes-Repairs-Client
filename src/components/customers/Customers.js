import { Outlet } from "react-router-dom";

export default function Customers() {
  return (
    <>
      <h2 style={{margin: 20}}>Customers</h2>
      <Outlet />
    </>
  );
}
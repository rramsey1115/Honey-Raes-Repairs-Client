import { Outlet } from "react-router-dom";

export default function Customers() {
  return (
    <>
      <h2>Customers</h2>
      <Outlet />
    </>
  );
}
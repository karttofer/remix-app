import { Outlet } from "@remix-run/react";

export default function people() {
  return (
    <div>
      <h1>People</h1>
      <Outlet />
    </div>
  );
}
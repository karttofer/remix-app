import { Outlet } from "@remix-run/react";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Outlet />
    </div>
  );
}
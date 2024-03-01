import { Outlet } from "@remix-run/react";
export default function PeopleId() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello worldasdasdasaa!
            </h1>
            <Outlet />
        </div>
    );
}
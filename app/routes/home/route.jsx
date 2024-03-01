// Dependencies
import { Outlet, json, useLoaderData } from "@remix-run/react";

// Helpers
import { useDataFetching } from "../../helpers/useDataFetching";

// Non-Lazy Components
import Loading from '../home/components/loading'
import PeopleCard from '../home/components/peopleCard'

export async function loader() {
  return json({ BASE_URL: process.env.BASE_URL });
}

export default function Home() {
  const { BASE_URL } = useLoaderData();
  const { data, loading, error } = useDataFetching(`${BASE_URL}people`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <section className='flex flex-wrap'>
        <PeopleCard peopleList={data.results} />
      </section>
      <Outlet />
    </div>
  );
}
// Dependencies
import { Outlet, json, useLoaderData } from '@remix-run/react'
import { Suspense, lazy } from 'react'
// Helpers
import useDataFetching from '../../helpers/useDataFetching'
// Models
import { IEnvBaseUrl } from '../../globals/models/globals'
// Components
import Loading from '../../globals/components/loading'

const PeopleCardLazyComponent = lazy(() => import('./components/peopleCard'))

export async function loader() {
  return json({ BASE_URL: process.env.BASE_URL })
}

const Home: React.FC = () => {
  const { BASE_URL } = useLoaderData<IEnvBaseUrl>()
  const { data, loading, error } = useDataFetching(`${BASE_URL}people`)

  if (loading) {
    return (
      <Loading message="The force is bringing us the necessary information. 🔥" />
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <main>
      <section className="flex items-center justify-center flex-wrap">
        <Suspense fallback={<div>Loading...</div>}>
          <PeopleCardLazyComponent peopleList={data.results} />
        </Suspense>
      </section>
      <Outlet />
    </main>
  )
}
export default Home

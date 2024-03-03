// Dependencies
import { json, useLoaderData, useParams, Params } from '@remix-run/react'
import { useEffect } from 'react'
// Helper
import useDataFetching from '../../helpers/useDataFetching'
import useDetailData from '../../helpers/useUserDetailData'
// Models
import {
  IEnvBaseUrl,
  IPeopleDetailsInformationLinks,
} from '../../globals/models/globals'
// Components
import Loading from '../../globals/components/loading'

export async function loader() {
  return json({ BASE_URL: process.env.BASE_URL })
}

const PeopleId: React.FC = () => {
  const params: Params<string> = useParams()
  const { BASE_URL } = useLoaderData<IEnvBaseUrl>()
  const { data, loading, error } = useDataFetching(
    `${BASE_URL}people/?search=${params.name}`
  )
  const { detailData, getDetailData } = useDetailData()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          const { results } = data
          const peopleDetails: IPeopleDetailsInformationLinks[] = results.map(
            (element: IPeopleDetailsInformationLinks) => ({
              films: element.films,
              homeworld: element.homeworld,
            })
          )
          const filmUrls = peopleDetails.reduce(
            (acc: string[], detail: { films: string[] }) =>
              acc.concat(detail.films),
            []
          )
          const keys = [
            {
              key: 'homeworld',
              call: peopleDetails.map(
                (detail: { homeworld: string }) => detail.homeworld
              ),
            },
            {
              key: 'films',
              call: filmUrls,
            },
          ]

          keys.forEach(async (fetchKeys: { call: string[]; key: string }) => {
            await getDetailData({
              urls: fetchKeys.call,
              keyName: fetchKeys.key,
            })
          })
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`Error fetching data: ${error.message}`)
        }
        throw error
      }
    }

    fetchData()
  }, [data])

  if (loading || !Object.keys(detailData).length) {
    return <Loading message="Wait a second Jedi, we are getting the data!" />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <main className="bg-gray-500 flex items-center justify-center">
      <section className="flex items-center justify-center">
        {Object.keys(detailData).length &&
          data &&
          data.results &&
          data.results.map((people: any, index: any) => (
            <div
              key={index}
              className="max-w-sm w-full lg:max-w-full lg:flex mx-auto mb-8"
            >
              <div className="bg-black rounded-lg p-4 flex flex-col justify-between leading-normal w-full">
                <div className="mb-4">
                  <h2 className="text-yellow-500 text-xl font-bold mb-2">
                    {people.name}
                  </h2>
                </div>
                <div className="mb-4">
                  <p className="text-gray-400 text-sm">
                    Birth Year: {people.birth_year}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">
                    Home World Description
                  </p>
                  <ul className="list-none ml-4">
                    {detailData &&
                      detailData.homeworld.map((world, worldIndex) => (
                        <li key={worldIndex} className="mb-1">
                          <span className="text-gray-400">
                            Name: {world.name}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Movies</p>
                  <ul className="list-none ml-4">
                    {detailData &&
                      detailData.films &&
                      detailData.films.map((film, filmIndex) => (
                        <li key={filmIndex} className="mb-1">
                          <span className="text-gray-400">
                            Title:{film.title}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </section>
    </main>
  )
}
export default PeopleId

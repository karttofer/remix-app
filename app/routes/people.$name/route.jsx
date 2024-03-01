// Dependencies
import { json, useLoaderData, useParams } from "@remix-run/react";

// Helper
import { useDataFetching } from "../../helpers/useDataFetching";
import { useState, useEffect } from "react";

// Components
import Loading from "./components/loading";

export async function loader() {
  return json({ BASE_URL: process.env.BASE_URL });
}

export default function PeopleId() {
  const { BASE_URL } = useLoaderData();
  const params = useParams();
  const { data, loading, error } = useDataFetching(
    `${BASE_URL}people/?search=${params.name}`
  );
  const [detailData, setDetailData] = useState({});

  /**
   * @description We are getting films and home world from the APi
   * since this majory of the information needs to be fetch from backend
   * getDetailData will be in-charge of get these information
   */
  useEffect(() => {
    const getDetailData = async (urls, keyName) => {
      try {
        const dataPromises = urls.map(async (url) => {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
          }

          return await response.json();
        });

        const detailsData = await Promise.all(dataPromises);

        setDetailData((prevData) => ({
          ...prevData,
          [keyName]: detailsData,
        }));

        return detailsData;
      } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        throw error;
      }
    };

    if (data) {
      const { results } = data;
      const detailPeopleDetails = results.map((element) => ({
        films: element.films,
        home: element.homeworld,
      }));

      const filmUrls = detailPeopleDetails.reduce(
        (acc, detail) => acc.concat(detail.films),
        []
      );

      const keys = [
        {
          key: "home",
          call: detailPeopleDetails.map((detail) => detail.home),
        },
        {
          key: "films",
          call: filmUrls,
        },
      ];

      keys.forEach(async (fetchKeys) => {
        await getDetailData(fetchKeys.call, fetchKeys.key);
      });
    }
  }, [data, setDetailData]);

  if (loading || !Object.keys(detailData).length) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="bg-gray-500 flex items-center justify-center h-screen ">
      <section className="bg-gray-900 text-white p-6">
        {Object.keys(detailData).length &&
          data &&
          data.results &&
          data.results.map((people, index) => (
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
                      detailData.home.map((world, worldIndex) => (
                        <li key={worldIndex} className="mb-1">
                          <span className="text-gray-400">Name:</span>{" "}
                          {world.name}
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
                          <span className="text-gray-400">Title:</span>{" "}
                          {film.title}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}

import { Link } from "@remix-run/react";

function PeopleData({ peopleList }) {
  return (
    <>
      {peopleList &&
        peopleList.map((people) => (
          <div class="cursor-pointer hover:bg-neutral-100 max-w-30 min-w-30 m-5 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{people.name}</div>
              <p class="text-gray-700 text-base">
                Birth Year:{people.birth_year}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Mass:{people.mass}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Skin Color: {people.skin_color}
              </span>
            </div>
            <div class="px-6 pt-4 pb-2">
              <button class="hover:bg-sky-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <Link
                  to={{ pathname: `/people/${people.name}`, state: people }}
                >
                  More details!
                </Link>
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default PeopleData;

// Dependencies
import { Link } from '@remix-run/react'
// Models
import { IPeopleList } from '../../../globals/models/globals'

const PeopleData: React.FC<IPeopleList> = ({ peopleList }) => (
  <>
    {peopleList &&
      peopleList.map((people) => (
        <div
          key={`${people.name}-${people.mass}`}
          className="cursor-pointer hover:bg-neutral-100 max-w-30 min-w-30 m-5 max-w-sm rounded overflow-hidden shadow-lg"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{people.name}</div>
            <p className="text-gray-700 text-base">
              Birth Year:{people.birth_year}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Mass:{people.mass}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Skin Color: {people.skin_color}
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="hover:bg-sky-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <Link to={`/people/${people.name}`}>More details!</Link>
            </button>
          </div>
        </div>
      ))}
  </>
)
export default PeopleData

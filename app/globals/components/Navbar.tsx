// Dependencies
import { Link, useLocation, Location } from '@remix-run/react'

const Navbar: React.FC = () => {
  const location: Location = useLocation()

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg">Star Wars</span>
        </div>
        {location.pathname !== '/login' ? (
          <div className="flex items-center">
            {location.pathname !== '/home' && (
              <Link
                to="/home"
                className="text-white hover:text-gray-400 px-3 py-2"
              >
                Home
              </Link>
            )}

            {location.pathname !== '/contact' && (
              <Link
                to="/contact"
                className="text-white hover:text-gray-400 px-3 py-2"
              >
                Contact
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar

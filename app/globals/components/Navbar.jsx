// Dependencies
import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg font-semibold">
            Star Wars
          </span>
        </div>
        <div className="flex items-center">
          {location.pathname !== "/home" && (
            <Link
              to="/home"
              className="text-white hover:text-gray-400 px-3 py-2"
            >
              Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

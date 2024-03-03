// Dependencies
import { Link } from '@remix-run/react'

const Footer: React.FC = () => (
  <div className="container mx-auto text-center">
    <p className="text-gray-300 mb-4">May the Force be with you!</p>
    <div className="flex justify-center space-x-4">
      <Link to="/contact" className="text-gray-300 hover:text-white">
        Contact
      </Link>
    </div>
  </div>
)

export default Footer

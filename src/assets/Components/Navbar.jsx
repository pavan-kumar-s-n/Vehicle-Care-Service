import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 text-decoration-none">
            QnA Auto
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition text-decoration-none">
              Home
            </Link>
            <Link to="/searchservices" className="text-gray-700 hover:text-blue-600 transition text-decoration-none">
              Services
            </Link>
            <Link to="/providerdashboard" className="text-gray-700 hover:text-blue-600 transition text-decoration-none">
              Providers
            </Link>
            <Link to="/signin" className="text-gray-700 hover:text-blue-600 transition text-decoration-none">
              Sign In
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          <Link to="/" className="block text-gray-700 hover:text-blue-600 text-decoration-none">
            Home
          </Link>
          <Link to="/searchservices" className="block text-gray-700 hover:text-blue-600 text-decoration-none">
            Services
          </Link>
          <Link to="/providerdashboard" className="block text-gray-700 hover:text-blue-600 text-decoration-none">
            Providers
          </Link>
          <Link to="/signin" className="block text-gray-700 hover:text-blue-600 text-decoration-none">
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

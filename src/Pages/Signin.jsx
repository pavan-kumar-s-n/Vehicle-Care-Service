import { Link } from "react-router-dom";
import vehicleImg from "../assets/Components/Vehicleimg.jpg";

export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-sm overflow-hidden">
        <img src={vehicleImg} alt="Service" className="w-full h-40 object-cover" />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="userid" className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <input
                id="userid"
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
            <Link to="/new-registration" className="text-blue-600 hover:underline">
              New Registration
            </Link>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

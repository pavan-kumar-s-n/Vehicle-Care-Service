<<<<<<< HEAD
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vehicleImg from "../assets/Components/Vehicleimg.jpg";

export default function Signin() {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await response.json();
      console.log("Login Success:", data);

      // Redirect after successful login
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

=======
import { Link } from "react-router-dom";
import vehicleImg from "../assets/Components/Vehicleimg.jpg";

export default function Signin() {
>>>>>>> c944ecd457cbad56b7fb9f333831dadad146b616
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-sm overflow-hidden">
        <img src={vehicleImg} alt="Service" className="w-full h-40 object-cover" />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

<<<<<<< HEAD
          <form className="space-y-4" onSubmit={handleSubmit}>
=======
          <form className="space-y-4">
>>>>>>> c944ecd457cbad56b7fb9f333831dadad146b616
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
<<<<<<< HEAD
                value={name}
                onChange={(e) => setUsername(e.target.value)}
=======
>>>>>>> c944ecd457cbad56b7fb9f333831dadad146b616
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
<<<<<<< HEAD
                value={password}
                onChange={(e) => setPassword(e.target.value)}
=======
>>>>>>> c944ecd457cbad56b7fb9f333831dadad146b616
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

<<<<<<< HEAD
            {error && <p className="text-red-500 text-sm">{error}</p>}

=======
>>>>>>> c944ecd457cbad56b7fb9f333831dadad146b616
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
<<<<<<< HEAD
            <Link to="/new-registration" className="text-success hover:underline text-decoration-none">
              New Registration
            </Link>
            <Link to="/forgot-password" className="text-danger hover:underline text-decoration-none">
=======
            <Link to="/new-registration" className="text-blue-600 hover:underline">
              New Registration
            </Link>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
>>>>>>> c944ecd457cbad56b7fb9f333831dadad146b616
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

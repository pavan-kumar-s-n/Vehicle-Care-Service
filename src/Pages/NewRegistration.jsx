import { useState } from "react";
import vehicleImg from "../assets/Components/Vehicleimg.jpg";

export default function NewRegistration() {
  const [role, setRole] = useState("customer");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match");
      return;
    }

    setError("");
    alert("✅ You have registered successfully!");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg overflow-hidden">
        {/* Top Image */}
        <img
          src={vehicleImg}
          alt="Register"
          className="w-full h-40 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Register Here</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Common Fields */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br></br><br></br>

            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br></br><br></br>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br></br><br></br>

             <input
              type="confirm password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br></br><br></br>

            {/* Error Message */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br></br><br></br>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br></br><br></br>

            <input
              type="file"
              accept="image/*"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            /><br></br><br></br>

            {/* Role Selector */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="customer">Customer (Vehicle Owner)</option>
              <option value="provider">Service Provider</option>
            </select><br></br><br></br>

            {/* Conditional Fields */}
            {role === "customer" && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                /><br></br><br></br>

                {/* Vehicle Details */}
                <input
                  type="text"
                  placeholder="Vehicle Type (Car, Bike, Truck...)"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                /><br></br><br></br>
                <input
                  type="text"
                  placeholder="Vehicle Make & Model"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                /><br></br><br></br>
                <input
                  type="text"
                  placeholder="Year of Manufacture"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                /><br></br><br></br>
                <input
                  type="text"
                  placeholder="Registration Number"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                /><br></br><br></br>
              </div>
            )}

            {role === "provider" && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Business / Shop Name"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                /><br></br><br></br>

                <input
                  type="text"
                  placeholder="Contact Person Name"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                /><br></br><br></br>

                <input
                  type="text"
                  placeholder="Workshop Address"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                /><br></br><br></br>

                <input
                  type="text"
                  placeholder="Enter services (e.g., Repairs, Washing, Battery)"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                /><br></br><br></br>

                <input
                  type="text"
                  placeholder="Operating Hours (e.g. Mon-Fri 9AM-6PM)"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                /><br></br><br></br>
              </div>
            )}

            {/* Common Agreement */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" required />
              <span className="text-sm text-gray-600">
                I agree to the Terms & Conditions
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

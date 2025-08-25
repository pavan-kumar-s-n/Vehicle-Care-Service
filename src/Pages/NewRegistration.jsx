import { useState } from "react";
import { Link } from "react-router-dom";
import vehicleImg from "../assets/Components/Vehicleimg.jpg";

export default function NewRegistration() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [vehicleImage, setVehicleImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("❌ Passwords do not match");
      return;
    }
    setError("");
    alert("✅ You have registered successfully!");
  };

  const handleVehicleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVehicleImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 p-6">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-3xl overflow-hidden border border-gray-200">
        
        {/* Top Banner */}
        <div className="relative">
          <img src={vehicleImg} alt="Register" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <h2 className="text-3xl font-bold text-white p-6 w-full drop-shadow-lg">
              Create Your Account
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Personal Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="input-stylish" 
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="input-stylish" 
                  required 
                />
              </div>
            </div>

            {/* Security */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Account Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-stylish"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-stylish"
                  required
                />
              </div>
              {error && <p className="text-red-600 text-sm mt-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </p>}
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="input-stylish" 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="input-stylish" 
                  required 
                />
              </div>
            </div>

            {/* Vehicle */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Vehicle Information</h3>
              <input 
                type="text" 
                placeholder="Address" 
                className="input-stylish" 
                required 
              /><br></br><br></br>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Vehicle Type (Car, Bike, Truck...)" 
                  className="input-stylish" 
                />
                <input 
                  type="text" 
                  placeholder="Vehicle Make & Model" 
                  className="input-stylish" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Year of Manufacture" 
                  className="input-stylish" 
                />
                <input 
                  type="text" 
                  placeholder="Registration Number" 
                  className="input-stylish" 
                />
              </div>

              {/* Vehicle Image Upload */}
              <div className="mt-4">
                <label className="block text-gray-700 mb-2 font-medium">Upload Vehicle Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleVehicleImage}
                  className="hidden"
                  id="vehicle-upload"
                />
                <label
                  htmlFor="vehicle-upload"
                  className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 text-gray-500 hover:border-purple-500 hover:text-purple-600 transition"
                >
                  {vehicleImage ? (
                    <img
                      src={vehicleImage}
                      alt="Vehicle Preview"
                      className="w-40 h-40 object-cover rounded-lg shadow-md"
                    />
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Click to upload or drag and drop</span>
                      <span className="text-xs text-gray-400 mt-1">JPG, PNG up to 5MB</span>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Agreement */}
            <div className="flex items-start space-x-3">
              <div className="flex items-center h-5 mt-0.5">
                <input
                  id="terms"
                  type="checkbox"
                  className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded"
                  required
                />
              </div>
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the{" "}
                <Link to="/terms" className="text-purple-600 hover:text-purple-500 underline">
                  terms and conditions
                </Link>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3.5 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>

      {/* Custom Input Style */}
      <style>
        {`
          .input-stylish {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.75rem;
            background: #f9fafb;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
          }
          .input-stylish:focus {
            outline: none;
            border-color: #a855f7;
            box-shadow: 0 0 8px rgba(168, 85, 247, 0.4);
            background: #fff;
          }
        `}
      </style>
    </div>
  );
}


import vehicleImg from "../assets/Components/Vehicleimg.jpg";
import { useState } from "react";

export default function ForgotPassword() {
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
      <div className="bg-white shadow-lg rounded-xl w-full max-w-sm overflow-hidden">
        <img src={vehicleImg} alt="Reset Password" className="w-full h-40 object-cover" />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br /><br />

            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br /><br />

             <input
              type="confirm password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br></br><br></br>
            {/*Error-Message*/}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

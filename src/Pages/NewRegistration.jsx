import vehicleImg from "../assets/Components/Vehicleimg.jpg";

export default function NewRegistration() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md overflow-hidden">
        <img src={vehicleImg} alt="Register" className="w-full h-40 object-cover" />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Register Here</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <br /><br />

            <input
              type="text"
              placeholder="User ID"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br /><br />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br /><br />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br /><br />

            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            /><br /><br />

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

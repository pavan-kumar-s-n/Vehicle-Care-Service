import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1 - Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">QnA Auto</h2>
          <p className="text-sm">
            Your trusted partner for vehicle services and auto care.  
            Book, track, and manage all your services in one place.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/searchservices" className="hover:text-blue-400">Services</a></li>
            <li><a href="/providersignup" className="hover:text-blue-400">Provider Signup</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="/signin" className="hover:text-blue-400">Sign In</a></li>
            <li><a href="/newregistration" className="hover:text-blue-400">Register</a></li>
            <li><a href="/forgotpassword" className="hover:text-blue-400">Forgot Password</a></li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><Facebook /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
            <a href="#" className="hover:text-blue-400"><Instagram /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} QnA Auto. All Rights Reserved.
      </div>
    </footer>
  );
}

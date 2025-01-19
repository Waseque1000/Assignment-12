import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/api/placeholder/40/40"
                alt="Tourist Guide Logo"
                className="h-10 w-10 rounded"
              />
              <span className="text-xl font-bold text-green-400">
                Tourist Guide
              </span>
            </div>
            <p className="text-gray-400">
              Discover the beauty of Bangladesh through our comprehensive travel
              guide. Plan your perfect trip with local insights and expert
              recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Developer</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Email Us:</p>
              <a
                href="mailto:contact@touristguide.com"
                className="text-green-400 hover:text-green-300"
              >
                contact@touristguide.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Tourist Guide. All rights reserved.
          </p>
          <p className="mt-2">
            Designed & Developed with ❤️ for Bangladesh Tourism
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card text-muted-foreground border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center text-center gap-12 lg:gap-20">
        {/* 1️⃣ Logo Section */}
        <div className="flex flex-col items-center text-center w-full sm:w-auto">
          <img
            src={logo}
            alt="The White Hart Logo"
            className="h-12 w-12 sm:h-14 sm:w-14 object-contain mb-2"
          />
          <p className="text-lg sm:text-xl font-semibold text-white tracking-wide">
            THE WHITE HART
          </p>
        </div>

        {/* 2️⃣ Contact Section */}
        <div id="contact">
          <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm mb-1 text-gray-300">+918421840407</p>
          <p className="text-sm mb-1 text-gray-300">+919156499439</p>
          <p className="text-sm mb-4 text-gray-300">thewhitehaart@gmail.com</p>

          <h3 className="text-white font-semibold text-lg mb-2">
            Stay Connected
          </h3>
          <div className="flex justify-center sm:justify-start gap-4 mt-2 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-primary"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-primary"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* 4️⃣ Opening Hours Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Opening Hours
          </h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Mon - Fri: 8am - 8pm</li>
            <li>Saturday: 9am - 7pm</li>
            <li>Sunday: 9am - 8pm</li>
          </ul>

          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Survey no 29, Sriram Chowk, 1/1A,
            <br />
            Pimpri-Chinchwad, Maharashtra 411057
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm sm:text-base text-gray-500 mt-8 border-t border-border pt-5">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">The White Hart</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

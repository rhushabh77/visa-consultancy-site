import React, { useState } from "react";
import { Link } from "react-router";
import {
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, to }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <Link to={to} className="block">
        <div className="text-gray-700">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0 text-violet-600">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+919876543210"
              className="flex items-center hover:text-white/80 transition group"
            >
              <Phone
                size={16}
                className="mr-2 group-hover:scale-110 transition"
              />
              +91 98765 43210
            </a>
            <a
              href="mailto:contact@revaeducation.com"
              className="flex items-center hover:text-white/80 transition group"
            >
              <Mail
                size={16}
                className="mr-2 group-hover:scale-110 transition"
              />
              contact@revaeducation.com
            </a>
          </div>
          <div className="flex items-center hover:text-white/80 transition group">
            <MapPin
              size={16}
              className="mr-2 group-hover:scale-110 transition"
            />
            123 Education Street, Bangalore
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-violet-600 group-hover:scale-110 transition duration-300" />
              <div className="absolute -inset-2 bg-violet-100 rounded-full opacity-0 group-hover:opacity-100 -z-10 transition duration-300"></div>
            </div>
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-violet-700 group-hover:to-indigo-700 transition duration-300">
              Reva Education
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <FlipLink to="/">Home</FlipLink>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center text-gray-700">
                <FlipLink to="/services">Services</FlipLink>
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div
                className={`
                absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl py-3 px-2
                ${activeMenu === "services" ? "block" : "hidden"}
                transform transition duration-300
              `}
              >
                <Link
                  to="/study-abroad"
                  className="block px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition duration-200"
                >
                  Study Abroad
                </Link>
                <Link
                  to="/career-counseling"
                  className="block px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition duration-200"
                >
                  Career Counseling
                </Link>
                <Link
                  to="/test-prep"
                  className="block px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition duration-200"
                >
                  Test Preparation
                </Link>
              </div>
            </div>

            <FlipLink to="/about">About Us</FlipLink>
            <FlipLink to="/contact">Contact</FlipLink>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2.5 rounded-full hover:from-violet-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-violet-600 transition"
              >
                Home
              </Link>
              <div>
                <button
                  className="flex items-center text-gray-700 hover:text-violet-600 transition"
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === "mobileServices" ? null : "mobileServices"
                    )
                  }
                >
                  Services
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {activeMenu === "mobileServices" && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/study-abroad"
                      className="block text-gray-700 hover:text-violet-600 transition"
                    >
                      Study Abroad
                    </Link>
                    <Link
                      to="/career-counseling"
                      className="block text-gray-700 hover:text-violet-600 transition"
                    >
                      Career Counseling
                    </Link>
                    <Link
                      to="/test-prep"
                      className="block text-gray-700 hover:text-violet-600 transition"
                    >
                      Test Preparation
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="text-gray-700 hover:text-violet-600 transition"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-violet-600 transition"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2.5 rounded-full hover:from-violet-700 hover:to-indigo-700 transition duration-300 text-center shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

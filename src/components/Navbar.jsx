import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const toggleServicesMenu = (e) => {
    e.preventDefault();
    setActiveMenu(activeMenu === "services" ? null : "services");
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 px-4"
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto my-4">
        <div className="flex justify-between items-center bg-white/80 backdrop-blur-md shadow-sm rounded-full px-6 py-4">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img
                src="/Logo.png"
                alt=""
                width="50px"
                height="50px"
                className="rounded-full"
              />
            </div>
            <span className="ml-2 text-2xl font-bold uppercase bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-violet-700 group-hover:to-indigo-700 transition duration-300">
              Reva Education Consultant
            </span>
          </Link>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <FlipLink to="/">Home</FlipLink>

            {/* Modified Services dropdown with click handler */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={toggleServicesMenu}
                className="flex items-center text-gray-700 hover:text-violet-600 focus:outline-none"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${
                    activeMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeMenu === "services" && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl py-3 px-2 mt-2">
                  <Link
                    to="/services/study-abroad-programs"
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
              )}
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

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/80 backdrop-blur-md shadow-sm rounded-3xl px-6 py-4">
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
    </motion.nav>
  );
};

export default Navbar;

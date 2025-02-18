import { Link } from "react-router";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/80">
                Stay updated with the latest news and opportunities
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 flex-grow md:w-64"
                />
                <button
                  type="submit"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
                >
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6 group">
              <BookOpen className="h-8 w-8 text-violet-500 group-hover:text-violet-400 transition-colors" />
              <span className="ml-2 text-2xl font-bold text-white">
                Reva Education
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering students to achieve their global education dreams
              through expert guidance and support.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, link: "#" },
                { icon: <Twitter size={20} />, link: "#" },
                { icon: <Instagram size={20} />, link: "#" },
                { icon: <Linkedin size={20} />, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { text: "About Us", link: "/about" },
                { text: "Our Services", link: "/services" },
                { text: "Study Abroad", link: "/study-abroad" },
                { text: "Test Preparation", link: "/test-prep" },
                { text: "Career Counseling", link: "/career-counseling" },
                { text: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 text-violet-500 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:text-violet-400 transition-colors">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                "University Admissions",
                "Visa Assistance",
                "IELTS Preparation",
                "Career Guidance",
                "Accommodation Support",
                "Pre-departure Briefing",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="hover:text-violet-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-violet-500 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-violet-600 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="group-hover:text-violet-400 transition-colors">
                  +91 98765 43210
                </span>
              </a>
              <a
                href="mailto:contact@revaeducation.com"
                className="flex items-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-violet-600 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="group-hover:text-violet-400 transition-colors">
                  contact@revaeducation.com
                </span>
              </a>
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-violet-600 transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="group-hover:text-violet-400 transition-colors">
                  123 Education Street,
                  <br />
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Reva Education. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

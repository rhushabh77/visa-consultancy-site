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
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6 group">
              <img
                src="/logo.png"
                alt="Reva Education"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-white">
                Reva Education
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Empowering students to achieve their global education dreams
              through expert guidance and personalized support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-violet-500 before:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { text: "About Us", link: "/about" },
                { text: "Our Services", link: "/services" },
                { text: "Study Abroad", link: "/study-abroad" },
                { text: "Test Preparation", link: "/test-prep" },
                { text: "Career Counseling", link: "/career-counseling" },
                { text: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="flex items-center group py-1 hover:pl-1 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-violet-500 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="group-hover:text-violet-400 transition-colors">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:bg-violet-500 before:rounded-full">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <a href="tel:+919876543210" className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center mr-4 group-hover:bg-violet-600 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/20">
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
                <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center mr-4 group-hover:bg-violet-600 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                  <Mail size={18} />
                </div>
                <span className="group-hover:text-violet-400 transition-colors">
                  contact@revaeducation.com
                </span>
              </a>
              <div className="flex items-center group md:col-span-2">
                <div className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center mr-4 group-hover:bg-violet-600 transition-colors duration-300 self-start mt-1 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="group-hover:text-violet-400 transition-colors block leading-relaxed">
                    123 Education Street,
                    <br />
                    Bangalore, India 560001
                  </span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4 md:col-span-2">
                {[
                  {
                    icon: <Facebook size={18} />,
                    link: "#",
                    label: "Facebook",
                  },
                  { icon: <Twitter size={18} />, link: "#", label: "Twitter" },
                  {
                    icon: <Instagram size={18} />,
                    link: "#",
                    label: "Instagram",
                  },
                  {
                    icon: <Linkedin size={18} />,
                    link: "#",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/30 bg-gray-950">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {currentYear} Reva Education Consultant. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-violet-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-violet-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-violet-400 transition-colors"
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

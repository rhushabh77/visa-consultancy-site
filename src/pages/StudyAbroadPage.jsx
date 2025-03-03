import { useState, useEffect } from "react";
import {
  Info,
  FileText,
  Plane,
  BookOpen,
  Check,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const StudyAbroadPage = () => {
  const [isVisible, setIsVisible] = useState({
    services: false,
    countries: false,
    process: false,
    testimonials: false,
    whyChoose: false,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = `New Consultation Request:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Destination: ${formData.destination}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your actual WhatsApp business number
    const whatsappNumber = "919876543210"; // Format: country code + number

    // Create WhatsApp link and open in new tab
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Reduced threshold to trigger animations earlier
      rootMargin: "0px 0px -50px 0px", // Adjusted rootMargin for better timing
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    const sections = [
      "services",
      "countries",
      "process",
      "testimonials",
      "whyChoose",
    ];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      <Navbar />
      {/* Hero Section with actual background image */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-900 text-white py-24 md:py-32 relative overflow-hidden">
        {/* Background image - replace placeholder with actual image URL in production */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{ backgroundImage: "url('/hero2.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6 animate-fadeIn">
              <div className="inline-block px-3 py-1 bg-blue-700 bg-opacity-50 rounded-full text-blue-200 text-sm font-medium mb-2">
                Global Education Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Your Journey to</span>
                <span className="text-yellow-300">Global Education</span>
                <span className="block">Starts Here</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-xl">
                Expert guidance for international university admissions and visa
                processing
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#studyAbroadForm"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-indigo-900 font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 hover:shadow-yellow-300/20"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#process"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2 group"
                >
                  Learn More{" "}
                  <ChevronRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="relative animate-float">
                {/* Decorative circles */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>

                <div className="relative bg-gradient-to-tr from-white to-blue-50 p-3 rounded-xl shadow-2xl rotate-2 transform hover:rotate-0 transition duration-500">
                  <img
                    src="/hero2.jpg"
                    alt="Students studying abroad"
                    className="rounded-lg"
                  />
                  {/* <div className="absolute -bottom-6 -right-6 bg-white py-2 px-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-medium">
                          R
                        </div>
                        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs font-medium">
                          S
                        </div>
                        <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-medium">
                          T
                        </div>
                      </div>
                      <span className="text-blue-900 font-bold">
                        10,000+ Students
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 md:py-28 relative overflow-hidden"
      >
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Comprehensive Support
            </h2>
            <div className="mt-3 h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Expert guidance at every step of your international education
              journey
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 ${
              isVisible.services
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                icon: <BookOpen className="text-blue-800" size={28} />,
                title: "University Selection",
                desc: "We help you choose the right university based on your academic profile, career goals, and budget considerations.",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: <FileText className="text-blue-800" size={28} />,
                title: "Application Support",
                desc: "Get expert assistance with application forms, SOP writing, LORs, and all documentation required for university admissions.",
                color: "from-purple-500 to-indigo-600",
              },
              {
                icon: <Plane className="text-blue-800" size={28} />,
                title: "Visa Assistance",
                desc: "Our visa experts provide comprehensive support for student visa applications with high success rates.",
                color: "from-indigo-500 to-blue-600",
              },
              {
                icon: <Info className="text-blue-800" size={28} />,
                title: "Pre-departure Guide",
                desc: "Prepare for your journey with our comprehensive pre-departure orientation and guidance.",
                color: "from-blue-500 to-cyan-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center relative z-10 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-indigo-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section
        id="countries"
        className="py-20 md:py-28 bg-gradient-to-r from-indigo-50 to-blue-50 relative overflow-hidden"
      >
        <div className="absolute -left-40 -bottom-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute right-0 top-0 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full mb-3">
              Global Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
              Popular Study Destinations
            </h2>
            <div className="mt-3 h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore opportunities in these leading education hubs around the
              world
            </p>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 transition-all duration-1000 ${
              isVisible.countries
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { name: "USA", flagUrl: "https://flagcdn.com/w80/us.png" },
              { name: "UK", flagUrl: "https://flagcdn.com/w80/gb.png" },
              { name: "Canada", flagUrl: "https://flagcdn.com/w80/ca.png" },
              { name: "Australia", flagUrl: "https://flagcdn.com/w80/au.png" },
              { name: "Germany", flagUrl: "https://flagcdn.com/w80/de.png" },
              {
                name: "New Zealand",
                flagUrl: "https://flagcdn.com/w80/nz.png",
              },
            ].map((country, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-sm"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-indigo-900 group-hover:text-indigo-700 transition-colors">
                  {country.name}
                </h3>
                <p className="text-xs font-medium text-indigo-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Universities
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
              Step by Step
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Our Process
            </h2>
            <div className="mt-3 h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Your journey to studying abroad made simple with our structured
              approach
            </p>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible.process ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Process timeline line */}
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 transform -translate-y-1/2 z-0"></div>

            {/* Process steps in flex container */}
            <div className="flex flex-col md:flex-row justify-between relative z-10 md:space-x-4">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  desc: "Free assessment of your profile and goals",
                  color: "from-blue-600 to-indigo-600",
                },
                {
                  step: 2,
                  title: "University Selection",
                  desc: "Shortlisting the best-fit universities",
                  color: "from-indigo-600 to-purple-600",
                },
                {
                  step: 3,
                  title: "Application Process",
                  desc: "Documentation and submission support",
                  color: "from-purple-600 to-blue-600",
                },
                {
                  step: 4,
                  title: "Visa Guidance",
                  desc: "Preparation for visa interview and application",
                  color: "from-blue-600 to-cyan-600",
                },
                {
                  step: 5,
                  title: "Pre-departure",
                  desc: "Orientation and travel preparation",
                  color: "from-cyan-600 to-blue-600",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`flex flex-col items-center mb-8 md:mb-0 transition-all duration-700 ${
                    isVisible.process
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`bg-gradient-to-r ${item.color} text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg transform hover:scale-110 transition duration-300`}
                  >
                    {item.step}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md text-center max-w-xs border-t-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 md:py-28 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-center bg-cover"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-800 text-indigo-200 text-sm font-medium rounded-full mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Student Success Stories
            </h2>
            <div className="mt-3 h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
            <p className="mt-4 text-indigo-200 max-w-2xl mx-auto">
              Hear from our students who are now living their dreams abroad
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
              isVisible.testimonials
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                name: "Rahul Sharma",
                univ: "University of Toronto",
                text: "Reva Education made my dream of studying in Canada come true. Their guidance throughout the process was invaluable.",
                flagUrl: "https://flagcdn.com/w80/ca.png",
              },
              {
                name: "Priya Patel",
                univ: "University of Melbourne",
                text: "The visa assistance provided by Reva was exceptional. They prepared me thoroughly for the interview and handled all documentation.",
                flagUrl: "https://flagcdn.com/w80/au.png",
              },
              {
                name: "Aditya Singh",
                univ: "University of Manchester",
                text: "From university selection to pre-departure guidance, Reva's team was professional and supportive at every step.",
                flagUrl: "https://flagcdn.com/w80/gb.png",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-blue-50 p-6 md:p-8 rounded-xl shadow-lg relative transform transition duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-1 px-4 rounded-bl-lg rounded-tr-lg font-medium flex items-center gap-2">
                  <img
                    src={testimonial.flagUrl}
                    alt="Country flag"
                    className="w-5 h-5 object-contain"
                  />
                  {testimonial.univ}
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center mr-4 text-white font-bold text-xl shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-blue-600 font-medium">
                    Student since 2023
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="whyChoose"
        className="py-20 md:py-28 relative overflow-hidden"
      >
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
              Why Reva
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Why Choose Reva Education
            </h2>
            <div className="mt-3 h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our proven track record and student success stories speak for
              themselves
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
              isVisible.whyChoose
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                title: "Experienced Counselors",
                desc: "Our team has helped over 10,000 students achieve their study abroad dreams",
              },
              {
                title: "University Partnerships",
                desc: "Direct partnerships with 500+ universities worldwide",
              },
              {
                title: "High Success Rate",
                desc: "95% visa success rate across all destinations",
              },
              {
                title: "Personalized Guidance",
                desc: "Customized plans based on your academic profile and career goals",
              },
              {
                title: "End-to-End Support",
                desc: "From university selection to pre-departure orientation",
              },
              {
                title: "Post-Landing Assistance",
                desc: "Continuous support even after you arrive at your destination",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 group hover:bg-gradient-to-b hover:from-white hover:to-blue-50"
              >
                <div className="flex items-start">
                  <div className="mr-4 bg-gradient-to-r from-green-400 to-emerald-500 p-2 rounded-full text-white group-hover:scale-110 transition-transform duration-300 mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-blue-800 group-hover:text-indigo-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with WhatsApp Integration */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-center bg-cover"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-800 text-indigo-200 text-sm font-medium rounded-full mb-3">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Your Study Abroad Journey Today
            </h2>
            <div className="mt-3 h-1 w-20 bg-yellow-400 mx-auto rounded"></div>
            <p className="mt-4 text-indigo-200 max-w-2xl mx-auto">
              Take the first step towards your global education by booking a
              free consultation
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
            <div className="bg-white/10 backdrop-blur-lg text-white p-6 md:p-8 rounded-xl shadow-lg md:w-1/3 border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold mb-6 border-b border-white/20 pb-4">
                Contact Us
              </h3>
              <div className="flex items-center mb-6 hover:translate-x-1 transition-transform duration-300">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <MapPin size={18} />
                </div>
                <p>123 Education Street, Mumbai 400001</p>
              </div>
              <div className="flex items-center mb-6 hover:translate-x-1 transition-transform duration-300">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <Mail size={18} />
                </div>
                <p>info@revaeducation.com</p>
              </div>
              <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <Phone size={18} />
                </div>
                <p>+91 1234567890</p>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-6 md:p-8 rounded-xl shadow-xl md:w-1/3 transform transition duration-500 hover:shadow-2xl">
              <h3
                className="text-xl md:text-2xl font-bold mb-6 text-indigo-800 border-b border-indigo-100 pb-4"
                id="studyAbroadForm"
              >
                Book a Free Consultation
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition duration-300"
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Preferred Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition duration-300"
                    required
                  >
                    <option value="">Select a country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-lg transform hover:translate-y-0 hover:shadow-xl"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// Add custom styles for animations
const style = document.createElement("style");
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default StudyAbroadPage;

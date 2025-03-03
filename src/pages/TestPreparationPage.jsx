import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const TestPreparationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    exam: "IELTS",
    message: "",
  });
  const [isVisible, setIsVisible] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `New Inquiry from Test Preparation Page:%0A
Name: ${formData.fullName}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Exam: ${formData.exam}%0A
Message: ${formData.message}`;

    // Replace with your actual WhatsApp number
    const phoneNumber = "911234567890";

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, "_blank");
  };

  // Observe elements for animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections with animation
    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* Full width hero section without padding */}
      <section
        id="hero-section"
        className={`w-full min-h-screen animate-section transition-all duration-1000 relative ${
          isVisible["hero-section"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: "url('/test-prep-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>

        <div className="container mx-auto relative z-10 flex flex-col justify-center items-start h-screen px-6 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Master International Exams
              <br /> with Expert Guidance
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              Comprehensive coaching with personalized strategies to help you
              achieve your dream score and study abroad goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-6 md:px-12 overflow-x-hidden">
        {/* Animated Exam Programs Section */}
        <section
          id="programs-section"
          className={`max-w-6xl mx-auto mb-16 animate-section transition-all duration-1000 delay-300 ${
            isVisible["programs-section"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 relative">
            <span className="inline-block relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 pb-3">
              Specialized Test Preparation Programs
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "IELTS & TOEFL",
                icon: "🌐",
                description:
                  "Master English proficiency tests with proven strategies",
              },
              {
                name: "GRE & GMAT",
                icon: "📊",
                description:
                  "Excel in graduate admission tests for top universities",
              },
              {
                name: "SAT & ACT",
                icon: "🎓",
                description:
                  "Comprehensive preparation for undergraduate admissions",
              },
              {
                name: "PTE Academic",
                icon: "🔍",
                description:
                  "Computer-based English test preparation with personalized coaching",
              },
            ].map((exam, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{exam.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {exam.name}
                </h3>
                <p className="text-gray-600">{exam.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section
          id="why-us-section"
          className={`max-w-6xl mx-auto mb-16 bg-blue-800 rounded-2xl p-8 text-white animate-section transition-all duration-1000 delay-500 ${
            isVisible["why-us-section"]
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Reva Education Consultants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description:
                  "Learn from certified trainers with years of experience in test preparation",
              },
              {
                title: "Personalized Study Plans",
                description:
                  "Customized coaching based on your strengths and areas of improvement",
              },
              {
                title: "Proven Success Rate",
                description:
                  "95% of our students achieve their target scores on the first attempt",
              },
              {
                title: "Comprehensive Materials",
                description:
                  "Access to extensive practice tests, study guides, and resources",
              },
              {
                title: "Flexible Schedule",
                description:
                  "Choose between weekday, weekend, and online classes",
              },
              {
                title: "Study Abroad Guidance",
                description:
                  "Complete assistance with university applications and admissions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:shadow-lg">
                  <div className="text-blue-800 text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section
          id="cta-section"
          className={`max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white animate-section transition-all duration-1000 delay-500 ${
            isVisible["cta-section"]
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">
            Begin Your Journey to Study Abroad
          </h2>
          <p className="text-xl mb-6">
            Let our expert counselors help you achieve your target scores and
            secure admissions to your dream universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Schedule a Consultation
            </button>
            {/* <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View Course Details
          </button> */}
          </div>
        </section>

        {/* Program Details with Animation */}
        <section
          id="details-section"
          className={`max-w-6xl mx-auto mt-16 animate-section transition-all duration-1000 delay-300 ${
            isVisible["details-section"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10 relative">
            <span className="inline-block relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 pb-3">
              Program Details
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-500 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Personalized Study Plans
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-green-500 mr-2">✓</div>
                  <p>
                    Diagnostic assessment to identify strengths and weaknesses
                  </p>
                </li>
                <li className="flex items-start transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-green-500 mr-2">✓</div>
                  <p>Customized study schedule and learning path</p>
                </li>
                <li className="flex items-start transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-green-500 mr-2">✓</div>
                  <p>Regular progress tracking and feedback sessions</p>
                </li>
                <li className="flex items-start transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-green-500 mr-2">✓</div>
                  <p>Adaptive learning techniques based on performance</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-500 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Comprehensive Support
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-green-500 mr-2">✓</div>
                  <p>Expert guidance on university selection and admissions</p>
                </li>
                <li className="flex items-start transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-green-500 mr-2">✓</div>
                  <p>Assistance with application documentation and essays</p>
                </li>
                <li className="flex items-start transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-green-500 mr-2">✓</div>
                  <p>Visa counseling and interview preparation</p>
                </li>
                <li className="flex items-start transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-green-500 mr-2">✓</div>
                  <p>Pre-departure orientation and support</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WhatsApp-Enabled Contact Form */}
        <section
          id="contact-section"
          className={`max-w-4xl mx-auto mt-16 animate-section transition-all duration-1000 delay-700 ${
            isVisible["contact-section"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-500 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-6 relative">
              <span className="inline-block relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 pb-3">
                Get in Touch
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below to schedule a free consultation with our
              education experts
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Preferred Exam
                  </label>
                  <select
                    name="exam"
                    value={formData.exam}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    <option>IELTS</option>
                    <option>TOEFL</option>
                    <option>GRE</option>
                    <option>GMAT</option>
                    <option>SAT</option>
                    <option>ACT</option>
                    <option>PTE</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center mx-auto"
                >
                  <span>Submit via WhatsApp</span>
                  <FaWhatsapp className="ml-2 text-xl" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TestPreparationPage;

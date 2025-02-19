import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle,
  Navigation,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// CSS classes for the blobs animation
const styles = `
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.group-hover-translate-y {
  transition: transform 0.3s ease;
}

.group:hover .group-hover-translate-y {
  transform: translateY(-5px);
}

/* Add these to your global CSS or Tailwind config */
@layer utilities {
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
}
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
    { icon: Mail, title: "Email", content: "info@revaeducation.com" },
    { icon: MapPin, title: "Location", content: "123 Education Street, NY" },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  const socialIcons = [
    { Icon: Facebook, link: "#" },
    { Icon: Twitter, link: "#" },
    { Icon: Instagram, link: "#" },
    { Icon: Linkedin, link: "#" },
  ];

  const formFields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+1 (555) 123-4567",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative pt-32">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Left Section - Info */}
            <div className="space-y-12">
              <div className="transition-all duration-500 hover:translate-y-[-5px]">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Let&apos;s start a conversation
                </h1>
                <p className="text-lg text-gray-600">
                  Get in touch with our expert education consultants and begin
                  your journey towards academic excellence.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-6 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialIcons.map(({ Icon, link }, index) => (
                    <a
                      key={index}
                      href={link}
                      className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <Icon className="h-5 w-5 text-blue-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 transition-all duration-500 hover:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.name} className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className={`
                      w-full px-4 py-3 rounded-xl 
                      bg-gray-50 border border-gray-200 
                      focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                      outline-none transition-all duration-300
                      ${
                        focusedField === field.name
                          ? "transform scale-[1.02]"
                          : ""
                      }
                    `}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows="4"
                    className={`
                    w-full px-4 py-3 rounded-xl 
                    bg-gray-50 border border-gray-200 
                    focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    outline-none transition-all duration-300 resize-none
                    ${
                      focusedField === "message" ? "transform scale-[1.02]" : ""
                    }
                  `}
                    placeholder="Tell us about your educational goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                  w-full py-4 px-6 rounded-xl 
                  font-medium flex items-center justify-center space-x-2 
                  group transition-all duration-300
                  ${
                    isSuccess
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  }
                  text-white transform hover:scale-[1.02]
                  disabled:opacity-70
                `}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent h-20 z-10" />

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Come meet our education consultants in person. We&apos;re
                conveniently located in the heart of the city.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl group">
              {/* Map Pin Indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-bounce">
                <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <Navigation className="h-6 w-6" />
                </div>
              </div>

              {/* Map Overlay */}
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]" />

              {/* Map */}
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698947!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645654846751!5m2!1sen!2s"
                  className="w-full h-full border-0 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Location Card */}
              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg z-20 transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-600">123 Education Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                    <a
                      href="#"
                      className="text-blue-600 font-medium mt-2 inline-flex items-center space-x-2 group/link"
                    >
                      <span>Get Directions</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <style jsx>{styles}</style>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

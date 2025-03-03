import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FinancialLoanSupportPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create message for WhatsApp with form data
    const message = `New Financial Loan Support Inquiry:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.preferredDate}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your actual WhatsApp number
    const whatsappNumber = "919876543210"; // Replace with your number with country code

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Fade-in animation for sections
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Stagger children animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card hover animation
  const cardHover = {
    rest: { scale: 1, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 overflow-hidden">
        {/* Hero Section - Full Width with Animated Text */}
        <div className="relative bg-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1.2, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-900"
            />
            <div className="absolute inset-0 bg-[url('/api/placeholder/1600/400')] opacity-10 bg-cover bg-center" />
          </div>

          <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight pt-16"
              >
                Financial Loan Assistance for International Education
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
              >
                We help make your dream of studying abroad a reality with our
                personalized loan assistance services.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8"
              >
                <a
                  className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  href="#form"
                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              fill="#f9fafb"
              className="w-full h-auto"
            >
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
              How We Help You Finance Your Education
            </h2>
            <p className="text-gray-700 text-lg mb-8 text-center">
              At Reva Education Consultant, we understand that financing your
              international education is a significant consideration. Our
              dedicated financial advisors work directly with you to navigate
              the complex loan application process and help you secure the best
              options for your needs.
            </p>
            <motion.div
              className="bg-gradient-to-r from-blue-100 to-indigo-50 p-8 rounded-2xl shadow-sm"
              whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Our Financial Support Services Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Personalized loan option research",
                  "Interest rate comparison assistance",
                  "Free loan eligibility assessment",
                  "End-to-end application assistance",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="rounded-full bg-green-100 p-2 mr-3">
                      <svg
                        className="h-5 w-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Loan Options */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">
              Loan Options We Can Help You With
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  title: "Secured Education Loans",
                  description:
                    "We'll guide you through the process of applying for loans with collateral that offer lower interest rates.",
                  features: [
                    "Help find competitive interest rates",
                    "Assistance with collateral documentation",
                    "Guidance on repayment terms",
                    "Tax benefits advisory",
                  ],
                },
                {
                  title: "Unsecured Education Loans",
                  description:
                    "We'll help you navigate no-collateral options if you have a strong academic profile.",
                  features: [
                    "Assistance with application strategy",
                    "Loan amount optimization",
                    "Guidance on repayment planning",
                    "Documentation support",
                  ],
                },
                {
                  title: "International Loan Assistance",
                  description:
                    "We provide guidance on loan programs available in your destination country.",
                  features: [
                    "Research on country-specific options",
                    "Currency exchange guidance",
                    "Available for USA, UK, Canada & Australia",
                    "Post-arrival financial planning support",
                  ],
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="bg-white rounded-2xl overflow-hidden flex-1 shadow-md flex flex-col"
                >
                  <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-6 px-6">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {card.title}
                    </h3>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-700 mb-6">{card.description}</p>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {card.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: featureIndex * 0.1,
                            duration: 0.3,
                          }}
                          className="flex items-start"
                        >
                          <svg
                            className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Loan Eligibility & Process */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">
              How We Assist Throughout The Process
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md flex flex-col h-full"
              >
                <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                  Eligibility Assessment
                </h3>
                {/* Main content area with flex-grow to push button to bottom */}
                <div className="space-y-3 flex-grow">
                  {[
                    {
                      title: "Citizenship Verification",
                      description:
                        "We help verify your eligibility as an Indian citizen with proper documentation",
                    },
                    {
                      title: "Admission Documentation",
                      description:
                        "We assist in organizing your admission documents for loan applications",
                    },
                    {
                      title: "Co-applicant Guidance",
                      description:
                        "We provide advice on selecting and preparing a co-applicant for your loan",
                    },
                    {
                      title: "Academic Record Preparation",
                      description:
                        "We help showcase your academic achievements for better loan approvals",
                    },
                    {
                      title: "Collateral Assessment",
                      description:
                        "We evaluate your assets and advise on the best collateral options",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-start group"
                    >
                      <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                        <svg
                          className="h-5 w-5 text-blue-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-900 text-lg block mb-1">
                          {item.title}
                        </span>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-md flex flex-col h-full"
              >
                <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                  Our Assistance Process
                </h3>
                {/* Main content area with flex-grow to push button to bottom */}
                <div className="space-y-4 flex-grow">
                  {[
                    {
                      title: "Personalized Consultation",
                      description:
                        "Our financial advisor will assess your situation and understand your specific needs",
                    },
                    {
                      title: "Documentation Support",
                      description:
                        "We help organize all required documentation to strengthen your application",
                    },
                    {
                      title: "Application Guidance",
                      description:
                        "We provide step-by-step assistance through the application process",
                    },
                    {
                      title: "Follow-up & Disbursement Support",
                      description:
                        "We stay with you until the funds are disbursed and provide ongoing support",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      className="flex"
                    >
                      <div className="flex-shrink-0 mr-5">
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#1E40AF",
                            transition: { duration: 0.2 },
                          }}
                          className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md"
                        >
                          {index + 1}
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 text-lg mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Financial Counseling with WhatsApp Form Integration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
            id="form"
          >
            <div className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
              <motion.div
                initial={{ opacity: 0.3, x: "100%" }}
                animate={{ opacity: 0.05, x: "0%" }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-white rounded-full w-96 h-96 blur-3xl -right-48 -top-48"
              />

              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Free Financial Guidance Session
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    Schedule a complimentary 30-minute session with our
                    education finance experts to understand your options and
                    create a personalized strategy.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Personalized financial assessment",
                      "Budget planning and cost calculations",
                      "Documentation strategy",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="flex items-start"
                      >
                        <svg
                          className="h-5 w-5 text-blue-300 mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={cardHover}
                    className="bg-white p-6 md:p-8 rounded-2xl"
                  >
                    <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                      Book Your Session
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                      >
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                      >
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                      >
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          required
                        />
                      </motion.div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Submit via WhatsApp
                      </motion.button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FinancialLoanSupportPage;

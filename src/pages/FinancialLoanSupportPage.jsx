import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FinancialLoanSupportPage = () => {
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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
                    {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors duration-300 mt-auto"
                  >
                    Get Our Help
                  </motion.button> */}
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
                {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors duration-300 mt-6"
              >
                Check Eligibility
              </motion.button> */}
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

                {/* <motion.a
                href="#form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors duration-300 mt-6"
              >
                Get Process Started
              </motion.a> */}
              </motion.div>
            </div>
          </motion.div>

          {/* Financial Counseling */}
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
                    <div className="space-y-4">
                      {[
                        { label: "Full Name", type: "text" },
                        { label: "Email Address", type: "email" },
                        { label: "Phone Number", type: "tel" },
                        { label: "Preferred Date", type: "date" },
                      ].map((field, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.3 + index * 0.1,
                            duration: 0.4,
                          }}
                        >
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          />
                        </motion.div>
                      ))}
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Schedule Consultation
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Make Your International Education Affordable?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Let our experts guide you through every step of securing the
            financial support you need for your studies abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(30, 64, 175, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-md transition-all duration-300"
            >
              Request Financial Assistance
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(30, 64, 175, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold shadow-sm transition-all duration-300"
            >
              Speak to a Financial Advisor
            </motion.button>
          </div>
        </motion.div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FinancialLoanSupportPage;

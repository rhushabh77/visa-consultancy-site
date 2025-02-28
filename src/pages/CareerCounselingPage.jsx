import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CareerCounselingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredCountry: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Career Counseling Request*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Preferred Country:* ${formData.preferredCountry}
*Course:* ${formData.course}
*Message:* ${formData.message}
    `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = "919876543210";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const countries = [
    {
      name: "USA",
      code: "us",
      features: [
        "Top-ranked universities",
        "Diverse programs",
        "OPT opportunities",
      ],
    },
    {
      name: "UK",
      code: "gb",
      features: [
        "Rich academic heritage",
        "Shorter programs",
        "Post-study work visa",
      ],
    },
    {
      name: "Canada",
      code: "ca",
      features: [
        "Affordable education",
        "Immigration pathways",
        "Work while studying",
      ],
    },
    {
      name: "Australia",
      code: "au",
      features: [
        "High quality of life",
        "Work opportunities",
        "Diverse environments",
      ],
    },
    {
      name: "Germany",
      code: "de",
      features: [
        "Low/no tuition",
        "Strong economy",
        "English programs available",
      ],
    },
    {
      name: "Singapore",
      code: "sg",
      features: [
        "Asian education hub",
        "Global recognition",
        "Proximity to India",
      ],
    },
  ];

  const processSteps = [
    {
      icon: "👋",
      title: "Initial Consultation",
      desc: "Understand your goals, academic background, and preferences",
    },
    {
      icon: "🔍",
      title: "University Selection",
      desc: "Create a shortlist of universities that match your profile",
    },
    {
      icon: "📋",
      title: "Application Support",
      desc: "Help with documents, essays, and submission process",
    },
    {
      icon: "✈️",
      title: "Pre-Departure Guidance",
      desc: "Visa assistance, accommodation, and orientation",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="max-w-7xl mx-auto text-center mb-16 pt-24"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Transform Your Future with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              International Education
            </span>
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Expert guidance to help you navigate your educational journey abroad
            and unlock global career opportunities.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#counseling-form"
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              Get Free Counseling
            </a>
          </motion.div>
        </motion.div>

        {/* Why Choose Study Abroad Section */}
        <motion.section
          className="max-w-7xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-800 mb-12"
            variants={itemVariants}
          >
            Why Choose Reva for Your Study Abroad Journey?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Personalized counseling from advisors with 10+ years of
                experience in international education.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                Global Network
              </h3>
              <p className="text-gray-600">
                Partnerships with 500+ universities across 20 countries for
                diverse program options.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                End-to-End Support
              </h3>
              <p className="text-gray-600">
                Assistance with university selection, applications, visas,
                scholarships, and pre-departure guidance.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Popular Destinations */}
        <motion.section
          className="max-w-7xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-800 mb-12"
            variants={itemVariants}
          >
            Popular Study Destinations
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                className="bg-white p-6 rounded-xl shadow-md overflow-hidden relative"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="w-10 h-auto mr-3 rounded shadow"
                  />
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {country.name}
                  </h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {country.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Process - Improved Section */}
        <motion.section
          className="max-w-7xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-800 mb-12"
            variants={itemVariants}
          >
            Our Counseling Process
          </motion.h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="relative mb-8 md:mb-0">
                    <motion.div
                      className="w-20 h-20 bg-blue/80 border-2 border-blue-900 rounded-full flex items-center justify-center text-white text-3xl mb-4 mx-auto shadow-lg"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        delay: index * 0.2,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-md text-center h-full flex flex-col justify-between"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                    <div className="mt-4 bg-indigo-50 text-indigo-800 font-medium py-2 px-3 rounded-lg text-sm">
                      Step {index + 1}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="max-w-7xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-800 mb-12"
            variants={itemVariants}
          >
            Success Stories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Priya Sharma",
                university: "University of Toronto",
                quote:
                  "Reva Education Consultant made my dream of studying in Canada a reality. Their step-by-step guidance through the entire process was invaluable.",
                avatar: "👩",
              },
              {
                name: "Rahul Verma",
                university: "University of Melbourne",
                quote:
                  "From choosing the right program to securing a scholarship, Reva helped me navigate every challenge. Now I am thriving in Australia!",
                avatar: "👨",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 italic mb-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p className="font-semibold text-indigo-700">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Counseling Form */}
        <motion.section
          id="counseling-form"
          className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-800 mb-8"
            variants={itemVariants}
          >
            Get Personalized Counseling
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-8"
            variants={itemVariants}
          >
            Fill out the form below, and our expert counselors will connect with
            you through WhatsApp to discuss your study abroad options.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="preferredCountry"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Preferred Country
                </label>
                <select
                  id="preferredCountry"
                  name="preferredCountry"
                  value={formData.preferredCountry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select a country</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-gray-700 font-medium mb-2"
              >
                Interested Course/Program
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Study Abroad Goals
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us about your educational background, career goals, and any specific queries you have."
              ></textarea>
            </div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="submit"
                className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
              >
                Submit & Connect on WhatsApp
              </button>
            </motion.div>
          </motion.form>
        </motion.section>

        {/* Stats */}
        <motion.section
          className="max-w-7xl mx-auto mb-20 py-12 bg-indigo-800 rounded-xl text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Students Trust Us
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "5,000+", label: "Successful Placements" },
              { number: "500+", label: "University Partners" },
              { number: "98%", label: "Visa Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-indigo-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="max-w-4xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-indigo-800 mb-12"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: "When should I start my study abroad application process?",
                a: "Ideally, you should start 12-18 months before your intended start date. This gives you enough time for exams, applications, and visa processing.",
              },
              {
                q: "What qualifications do I need to study abroad?",
                a: "Requirements vary by country and program, but generally you'll need good academic scores, language proficiency tests (IELTS/TOEFL), and sometimes standardized tests like GRE/GMAT for graduate programs.",
              },
              {
                q: "How much does it cost to study abroad?",
                a: "Costs vary significantly by country, city, and university. We help you find options that match your budget and identify scholarship opportunities to reduce expenses.",
              },
              {
                q: "Can I work while studying abroad?",
                a: "Most popular study destinations allow international students to work part-time during studies and full-time during breaks. We provide detailed guidance on work rights for your chosen destination.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-12 rounded-xl text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Global Education Journey?
          </h2>
          <p className="text-xl mb-8">
            Let our experts guide you toward the right path for your
            international education goals.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#counseling-form"
              className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Book Your Free Consultation
            </a>
          </motion.div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default CareerCounselingPage;

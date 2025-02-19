import { Link } from "react-router";
import {
  Users,
  BookCheck,
  GraduationCap,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-violet-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center bg-violet-50 rounded-full px-4 py-2 mb-6">
              <GraduationCap className="w-5 h-5 text-violet-600 mr-2" />
              <span className="text-violet-600 font-medium">
                Transforming Education Dreams into Reality
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Your Gateway to Global Education Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Expert guidance for international education, career counseling,
              and test preparation. Start your journey to academic success with
              us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-violet-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-gray-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Students Placed" },
              { number: "50+", label: "Partner Universities" },
              { number: "95%", label: "Success Rate" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational services tailored to meet your academic
              and career goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe className="w-12 h-12" />}
              title="Study Abroad"
              description="Comprehensive guidance for international university admissions, visa processing, and pre-departure preparation."
              features={[
                "University Selection",
                "Application Support",
                "Visa Guidance",
                "Pre-departure Briefing",
              ]}
              link="/study-abroad"
            />
            <ServiceCard
              icon={<Users className="w-12 h-12" />}
              title="Career Counseling"
              description="Professional guidance to help you make informed decisions about your career path and academic journey."
              features={[
                "Personality Assessment",
                "Career Mapping",
                "Industry Insights",
                "Job Market Analysis",
              ]}
              link="/career-counseling"
            />
            <ServiceCard
              icon={<BookCheck className="w-12 h-12" />}
              title="Test Preparation"
              description="Expert coaching for international exams with proven methodologies and comprehensive study materials."
              features={[
                "IELTS & TOEFL",
                "GRE & GMAT",
                "SAT & ACT",
                "PTE Academic",
              ]}
              link="/test-prep"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Reva Education Consultant
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best educational consulting
              services with a proven track record of success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Expert Counselors",
                desc: "Experienced professionals with deep knowledge of global education",
              },
              {
                title: "Personalized Approach",
                desc: "Customized solutions tailored to your specific needs and goals",
              },
              {
                title: "Success Track Record",
                desc: "Proven history of successful student placements worldwide",
              },
              {
                title: "Comprehensive Support",
                desc: "End-to-end assistance from application to arrival",
              },
              {
                title: "Updated Resources",
                desc: "Access to latest information and study materials",
              },
              {
                title: "Affordable Fees",
                desc: "Competitive pricing with flexible payment options",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-violet-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Take the first step towards your educational goals. Schedule a
              free consultation with our experts today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const ServiceCard = ({ icon, title, description, features, link }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 group">
      <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
        <div className="text-violet-600">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <CheckCircle2 className="w-5 h-5 text-violet-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700 transition duration-300 group"
      >
        Learn More
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default HomePage;

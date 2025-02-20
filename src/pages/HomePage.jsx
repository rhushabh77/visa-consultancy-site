import { Link } from "react-router";
import {
  Users,
  BookCheck,
  Globe,
  ArrowRight,
  CheckCircle2,
  Star,
  Globe2,
  Brain,
  TrendingUp,
  Play,
  Clock,
  Calendar,
  Building2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "/heroImage.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            alt="Students in campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/50 to-indigo-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-white font-medium">
                  Trusted by 20,000+ Students Worldwide
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Your Dreams,
                <br />
                Our Guidance,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                  Global Success
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
                Transform your educational journey with personalized counseling,
                expert guidance, and comprehensive support at every step towards
                global education excellence.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/get-started"
                  className="group bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:bg-white/20 flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Success Stories
                </button>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src="https://placehold.co/40x40"
                      alt={`Student ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-white">
                  <div className="font-bold text-2xl">2,000+</div>
                  <div className="text-gray-300">Success Stories</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Consultation
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none">
                    <option className="bg-gray-800">Select Service</option>
                    <option className="bg-gray-800">Study Abroad</option>
                    <option className="bg-gray-800">Career Counseling</option>
                    <option className="bg-gray-800">Test Preparation</option>
                  </select>
                  <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Partner Universities
            </h2>
            <p className="text-xl text-gray-600">
              Access to top-ranked institutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center"
              >
                <img
                  src="https://placehold.co/120x60"
                  alt={`University ${i}`}
                  className="max-w-[120px] opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Education Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock your potential with our expert-led services designed for
              your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="w-12 h-12" />,
                title: "Study Abroad Programs",
                description:
                  "Expert guidance for international university admissions and visa processing",
                features: [
                  "University Selection",
                  "Application Support",
                  "Visa Assistance",
                  "Pre-departure Guide",
                ],
              },
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Career Counseling",
                description:
                  "Professional guidance for informed career decisions and academic planning",
                features: [
                  "Skill Assessment",
                  "Career Mapping",
                  "Industry Insights",
                  "Growth Planning",
                ],
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Test Preparation",
                description:
                  "Comprehensive coaching for international exams with proven strategies",
                features: [
                  "IELTS & TOEFL",
                  "GRE & GMAT",
                  "SAT & ACT",
                  "Personalized Plans",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                    <div className="text-violet-600">{service.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-violet-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-violet-600 font-semibold group-hover:text-violet-700 transition duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Popular Study Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore educational opportunities in these leading countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                country: "United States",
                universities: "1000+ Universities",
                image: "https://placehold.co/400x250",
                flag: "🇺🇸",
              },
              {
                country: "United Kingdom",
                universities: "150+ Universities",
                image: "https://placehold.co/400x250",
                flag: "🇬🇧",
              },
              {
                country: "Canada",
                universities: "100+ Universities",
                image: "https://placehold.co/400x250",
                flag: "🇨🇦",
              },
              {
                country: "Australia",
                universities: "43+ Universities",
                image: "https://placehold.co/400x250",
                flag: "🇦🇺",
              },
              {
                country: "Germany",
                universities: "400+ Universities",
                image: "https://placehold.co/400x250",
                flag: "🇩🇪",
              },
              {
                country: "New Zealand",
                universities: "8+ Universities",
                image: "https://placehold.co/400x250",
                flag: "🇳🇿",
              },
            ].map((country, index) => (
              <Link
                key={index}
                to={`/country/${country.country
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={country.image}
                  alt={country.country}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    {country.flag} {country.country}
                  </h3>
                  <p className="text-gray-300">{country.universities}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read inspiring stories from our successful students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={`https://placehold.co/64x64`}
                    alt={`Student ${i}`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Sarah Thompson</h3>
                    <p className="text-gray-600">Harvard University</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  &quot;The guidance and support I received were invaluable.
                  They helped me achieve my dream of studying at Harvard.&quot;
                </p>
                <div className="flex items-center text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/success-stories"
            className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700 transition duration-300"
          >
            View All Success Stories
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Events & Workshops */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Upcoming Events & Workshops
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our informative sessions to learn more about global education
              opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "University Fair 2024",
                date: "March 15, 2024",
                type: "Virtual Event",
                description:
                  "Meet representatives from top 50 universities worldwide",
              },
              {
                title: "IELTS Masterclass",
                date: "March 20, 2024",
                type: "Workshop",
                description: "Learn expert strategies for IELTS success",
              },
              {
                title: "Scholarship Seminar",
                date: "March 25, 2024",
                type: "Hybrid Event",
                description: "Discover global scholarship opportunities",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-medium">
                    {event.type}
                  </div>
                  <Calendar className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-gray-500 mb-6">
                  <Clock className="w-5 h-5 mr-2" />
                  {event.date}
                </div>
                <button className="w-full bg-white group-hover:bg-violet-600 text-violet-600 group-hover:text-white border border-violet-600 px-6 py-3 rounded-xl font-semibold transition duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Free Educational Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive library of resources to help you prepare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "University Guides",
                icon: <Building2 className="w-8 h-8" />,
                description: "Comprehensive guides for top universities",
              },
              {
                title: "Test Prep Materials",
                icon: <BookCheck className="w-8 h-8" />,
                description: "Free study materials for IELTS, TOEFL, GRE",
              },
              {
                title: "Visa Guidelines",
                icon: <Globe className="w-8 h-8" />,
                description: "Country-specific visa application guides",
              },
              {
                title: "Career Resources",
                icon: <Users className="w-8 h-8" />,
                description: "Career planning and development resources",
              },
            ].map((resource, index) => (
              <Link
                key={index}
                to={`/resources/${resource.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <div className="text-violet-600">{resource.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <span className="text-violet-600 font-semibold inline-flex items-center">
                  Access Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in global education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Top Study Destinations for 2024",
                category: "Study Abroad",
                readTime: "5 min read",
                image: "https://placehold.co/400x250",
              },
              {
                title: "How to Secure a Full Scholarship",
                category: "Scholarships",
                readTime: "7 min read",
                image: "https://placehold.co/400x250",
              },
              {
                title: "Career Trends After COVID-19",
                category: "Career Insights",
                readTime: "4 min read",
                image: "https://placehold.co/400x250",
              },
            ].map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-violet-600 text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 transition duration-300">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700 transition duration-300"
            >
              View All Articles
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 md:p-20">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Begin Your Global Education Journey?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Take the first step towards your dreams with a free
                  consultation from our education experts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center group"
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition duration-300 inline-flex items-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="bg-white/10 backdrop-blur rounded-full p-8 w-48 h-48 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/90">Expert Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

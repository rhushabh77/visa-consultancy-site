import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Globe2,
  Brain,
  TrendingUp,
  // Play,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "/heroImage.jpg";
import ConsultationForm from "../components/ConsultationForm";
import HarvardLogo from "@/assets/Harvard_University_logo.png";
import OxfordLogo from "@/assets/oxford-university-logo.png";
import MITLogo from "@/assets/MIT-Emblema.png";
import StanfordLogo from "@/assets/Stanford-Emblem.png";
import TorontoLogo from "@/assets/University_of_Toronto.png";
import StuttgartLogo from "@/assets/university-of-stuttgart-logo.png";

const HomePage = () => {
  // University data with real university images
  const universities = [
    { name: "Harvard University", logo: HarvardLogo },
    { name: "Oxford University", logo: OxfordLogo },
    { name: "MIT", logo: MITLogo },
    { name: "Stanford University", logo: StanfordLogo },
    { name: "University of Toronto", logo: TorontoLogo },
    {
      name: "University of Stuttgart",
      logo: StuttgartLogo,
    },
  ];

  // Country data with flagcdn links
  const countries = [
    {
      country: "United States",
      universities: "1000+ Universities",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      flagUrl: "https://flagcdn.com/w320/us.png",
    },
    {
      country: "United Kingdom",
      universities: "150+ Universities",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      flagUrl: "https://flagcdn.com/w320/gb.png",
    },
    {
      country: "Canada",
      universities: "100+ Universities",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
      flagUrl: "https://flagcdn.com/w320/ca.png",
    },
    {
      country: "Australia",
      universities: "43+ Universities",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      flagUrl: "https://flagcdn.com/w320/au.png",
    },
    {
      country: "Germany",
      universities: "400+ Universities",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      flagUrl: "https://flagcdn.com/w320/de.png",
    },
    {
      country: "New Zealand",
      universities: "8+ Universities",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
      flagUrl: "https://flagcdn.com/w320/nz.png",
    },
  ];

  // Student testimonials with more realistic data
  const testimonials = [
    {
      name: "Sarah Thompson",
      university: "Harvard University",
      image: "https://i.imgur.com/8fZGt15.jpg",
      quote:
        "The guidance and support I received were invaluable. They helped me achieve my dream of studying at Harvard.",
    },
    {
      name: "Michael Chen",
      university: "University of Oxford",
      image: "https://i.imgur.com/7PThRzy.jpg",
      quote:
        "From test preparation to visa assistance, every step was made easier with their expert counseling. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      university: "University of Toronto",
      image: "https://i.imgur.com/Z7OgujL.jpg",
      quote:
        "Their personalized approach to career counseling helped me find the perfect program that aligned with my goals.",
    },
  ];

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

              {/* <div className="flex flex-wrap gap-4 mb-12">
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
              </div> */}
            </div>

            <div className="relative">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Universities
            </h2>
            <p className="text-xl text-gray-600">
              Access to top-ranked institutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {universities.map((university, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-all duration-300"
              >
                <img
                  src={university.logo}
                  alt={university.name}
                  className="max-w-32 h-32 opacity-80 hover:opacity-100 transition-opacity object-contain"
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

      {/* Countries Section with FlagCDN */}
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
            {countries.map((country, index) => (
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
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                    <img
                      src={country.flagUrl}
                      alt={`${country.country} flag`}
                      className="w-8 h-auto rounded-sm"
                    />
                    {country.country}
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
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.university}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  &quot;{testimonial.quote}&quot;
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
        {/* <div className="mt-12 text-center">
          <Link
            to="/success-stories"
            className="inline-flex items-center text-violet-600 font-semibold hover:text-violet-700 transition duration-300"
          >
            View All Success Stories
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div> */}
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

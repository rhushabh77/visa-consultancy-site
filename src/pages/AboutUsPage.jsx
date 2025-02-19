import {
  Compass,
  BookOpen,
  Globe,
  GraduationCap,
  Users2,
  Heart,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-indigo-50 to-white h-[92dvh]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Shaping Futures Through
                <span className="block text-indigo-600 mt-2">
                  Global Education
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Empowering students to achieve their international education
                dreams with expert guidance and personalized support
              </p>
            </div>
          </div>
        </section>

        {/* Vision Cards */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Compass className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be India&apos;s most trusted education consultancy, known
                  for transforming students&apos; dreams into reality through
                  transparent and ethical guidance.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <BookOpen className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide comprehensive educational consulting services that
                  open doors to global opportunities for ambitious students.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Globe className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
                <p className="text-gray-600">
                  Creating a network of successful global professionals through
                  quality education guidance and mentorship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20 bg-indigo-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="flex gap-6">
                <GraduationCap className="w-12 h-12 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Expert Counseling
                  </h3>
                  <p className="text-gray-600">
                    Our experienced counselors provide personalized guidance
                    based on your academic goals, skills, and aspirations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Users2 className="w-12 h-12 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Student-First Approach
                  </h3>
                  <p className="text-gray-600">
                    We prioritize your success with transparent advice and
                    support throughout your educational journey.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Globe className="w-12 h-12 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Global Network</h3>
                  <p className="text-gray-600">
                    Strong partnerships with leading universities worldwide
                    ensure the best opportunities for our students.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Heart className="w-12 h-12 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600">
                    From application to admission, we&apos;re with you every
                    step of the way with comprehensive assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">
                Comprehensive Services
              </h2>
              <div className="grid gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                    Career Counseling
                  </h3>
                  <p className="text-gray-600">
                    Expert guidance to help you choose the right course and
                    university aligned with your career goals and interests.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                    Application Support
                  </h3>
                  <p className="text-gray-600">
                    Complete assistance with university applications, including
                    documentation, essays, and submission procedures.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                    Visa Guidance
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive support for student visa applications,
                    including documentation preparation and interview
                    preparation.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                    Pre-Departure Support
                  </h3>
                  <p className="text-gray-600">
                    Detailed guidance on accommodation, travel arrangements, and
                    everything you need to know before starting your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;

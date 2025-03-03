import React, { useState, useEffect } from "react";
import {
  Users,
  Heart,
  Target,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Animation utility for scroll-triggered animations
const useInView = (ref, options = { threshold: 0.1 }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};

const TimelineEvent = ({ year, title, description, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-12 group transition-all duration-1000 transform ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-600 to-purple-600 group-last:h-0" />
      <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-blue-600 ring-4 ring-blue-100" />
      <div className="text-sm text-blue-600 font-semibold mb-2">{year}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, role, image, bio, socials }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`relative group rounded-2xl overflow-hidden transition-all duration-1000 transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-100 opacity-0 transition-opacity" />
      <img
        src={image}
        alt={name}
        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 p-6 pb-10 text-white transform transition-all duration-500 ${
          isHovered ? "translate-y-0" : "translate-y-20"
        }`}
      >
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-300 mb-4">{role}</p>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">{bio}</p>
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              className="text-white hover:text-blue-400 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-1000 transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-8 border border-gray-200 rounded-xl group-hover:border-blue-200 transition-all duration-500 bg-white/80 backdrop-blur-sm">
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Mission Section */}
      <section className="py-20 relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
        {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" /> */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + i}s ease-in-out infinite ${i}s`,
            }}
          >
            <Sparkles className="w-12 h-12 text-blue-600" />
          </div>
        ))}
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl transform -rotate-6" />
          <img
            src="/reva-about-hero.png"
            alt="Team collaboration"
            className="relative rounded-2xl shadow-xl h-[80dvh] w-full object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion for Education",
                description:
                  "We're driven by our love for learning and dedication to student success.",
              },
              {
                icon: Users,
                title: "Inclusive Community",
                description:
                  "We celebrate diversity and create an environment where everyone belongs.",
              },
              {
                icon: Target,
                title: "Excellence",
                description:
                  "We maintain the highest standards in everything we do.",
              },
            ].map((value, index) => (
              <ValueCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-2xl mx-auto">
            {[
              {
                year: "2016",
                title: "The Beginning",
                description:
                  "Started with a small team of 5 passionate educators.",
              },
              {
                year: "2017",
                title: "Global Expansion",
                description:
                  "Expanded operations to 10 countries and helped 1000+ students.",
              },
              {
                year: "2020",
                title: "Digital Transformation",
                description:
                  "Launched innovative online learning platforms and virtual counseling.",
              },
              {
                year: "2023",
                title: "Industry Recognition",
                description:
                  "Received multiple awards for excellence in education consulting.",
              },
            ].map((event, index) => (
              <TimelineEvent key={index} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Atul Patel",
                role: "Founder & CEO",
                image:
                  "https://media.licdn.com/dms/image/v2/C4D03AQHWWL3rFUNuVQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1594372498884?e=2147483647&v=beta&t=9Cv1AhqHtkEwnYqoXCRmv4SVeUI4QdIDok6NsiRDy7U",
                // bio: "Former professor with 15+ years of experience in international education.",
                socials: [
                  {
                    icon: <Linkedin size={20} />,
                    url: "https://in.linkedin.com/in/atul-patel-1b6a3023",
                  },
                  // { icon: <Twitter size={20} />, url: "#" },
                ],
              },
              {
                name: "Michael Chen",
                role: "Head of Counseling",
                image: "/api/placeholder/400/400",
                bio: "Certified career counselor specializing in STEM education.",
                socials: [
                  { icon: <Linkedin size={20} />, url: "#" },
                  { icon: <Github size={20} />, url: "#" },
                ],
              },
              {
                name: "Lisa Patel",
                role: "Global Relations Director",
                image: "/api/placeholder/400/400",
                bio: "10+ years experience in international university partnerships.",
                socials: [
                  { icon: <Linkedin size={20} />, url: "#" },
                  { icon: <Twitter size={20} />, url: "#" },
                ],
              },
            ].map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center transform hover:scale-105 transition-transform">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Education Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">
                  hello@educompany.com
                  <br />
                  support@educompany.com
                </p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">
                  +1 (555) 123-4567
                  <br />
                  Mon-Fri 9am-6pm EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatWhatsAppMessage = () => {
    return encodeURIComponent(
      `*New Consultation Request*\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Service: ${formData.service}\n` +
        `Message: ${formData.message}\n\n` +
        `Sent from website consultation form`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Replace this with your WhatsApp business number
      const whatsappNumber = "1234567890";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formatWhatsAppMessage()}`;

      // Simulate form submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        window.open(whatsappUrl, "_blank");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-6">Quick Consultation</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
              errors.name ? "border-red-400" : "border-white/20"
            } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
              errors.email ? "border-red-400" : "border-white/20"
            } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
              errors.phone ? "border-red-400" : "border-white/20"
            } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
          )}
        </div>

        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
              errors.service ? "border-red-400" : "border-white/20"
            } text-white focus:outline-none focus:ring-2 focus:ring-violet-500 appearance-none`}
          >
            <option value="" className="bg-gray-800">
              Select Service
            </option>
            <option value="Study Abroad" className="bg-gray-800">
              Study Abroad
            </option>
            <option value="Career Counseling" className="bg-gray-800">
              Career Counseling
            </option>
            <option value="Test Preparation" className="bg-gray-800">
              Test Preparation
            </option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-400">{errors.service}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message (Optional)"
            rows="3"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Get Free Consultation
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;

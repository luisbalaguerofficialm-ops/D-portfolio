import React, { useState } from "react";
import { Linkedin, Github, X, Instagram } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields.", {
        autoClose: 120000, // ✅ 2 minutes
      });
      return;
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "(No Subject)",
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    // 🔍 DEBUG LOG
    console.log("📨 Sending Email With Params:", templateParams);

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_k443u4e", // ✅ YOUR SERVICE ID
            template_id: "template_rentvcw", // ✅ YOUR TEMPLATE ID
            user_id: "-klwM82zLxcL9SXoc", // ✅ YOUR PUBLIC KEY
            template_params: templateParams,
          }),
        }
      );

      const result = await response.text();

      if (!response.ok) {
        console.error("EmailJS ERROR:", result);
        toast.error(`Email failed: ${result}`, {
          autoClose: 120000,
        });
        setLoading(false);
        return;
      }

      toast.success("Message sent successfully! 🎉", {
        autoClose: 120000,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("NETWORK ERROR:", error);
      toast.error("Network error. Please try again.", {
        autoClose: 120000,
      });
    }

    setLoading(false);
  };

  return (
    <>
      {/* ✅ TOAST CONFIG */}
      <ToastContainer
        position="top-right"
        autoClose={120000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <footer className="w-full bg-black text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              LET’S CONNECT
            </h2>

            <div className="space-y-3 text-gray-300">
              <p>
                Say hello at{" "}
                <a
                  href="mailto:danielbankz27@gmail.com"
                  className="underline text-lime-300"
                >
                  danielbankz27@gmail.com
                </a>
              </p>

              <p>
                Call me at{" "}
                <a
                  href="tel:+2349067596368"
                  className="underline text-lime-300"
                >
                  +234 906 759 6368
                </a>
              </p>
            </div>

            <div className="flex gap-6 mt-6">
              <Linkedin className="w-6 h-6 text-lime-300 cursor-pointer" />
              <Github className="w-6 h-6 text-lime-300 cursor-pointer" />
              <X className="w-6 h-6 text-lime-300 cursor-pointer" />
              <Instagram className="w-6 h-6 text-lime-300 cursor-pointer" />
            </div>

            <p className="text-gray-500 text-sm pt-10">© 2025 Daniel</p>
          </div>

          {/* RIGHT — FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Name*</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded px-4 py-3 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded px-4 py-3 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Message*</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded px-4 py-3 text-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-lime-300 text-black px-8 py-2 rounded-full font-semibold hover:bg-lime-400"
            >
              {loading ? "Sending..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;

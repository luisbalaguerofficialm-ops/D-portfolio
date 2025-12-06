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
      toast.error("Please fill all required fields.");
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

    // 🔍 DEBUG LOG — SHOW WHAT YOU ARE SENDING
    console.log("📨 Sending Email With Params:", {
      service_id: "service_b8tbyw5",
      template_id: "template_rentvcw",
      user_id: "RHBSGcwg3d1osoTle",
      template_params: templateParams,
    });

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_k443u4e", // <-- YOUR REAL SERVICE ID
            template_id: "template_rentvcw", // <-- YOUR REAL TEMPLATE ID
            user_id: "-klwM82zLxcL9SXoc", // <-- YOUR PUBLIC KEY
            template_params: templateParams,
          }),
        }
      );

      const data = await response.text(); // 🔍 Capture detailed error messages

      if (!response.ok) {
        console.error("EmailJS ERROR DETAILS:", data);
        toast.error("Email Failed: " + data);
        setLoading(false);
        return;
      }

      toast.success("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("NETWORK ERROR:", error);
      toast.error("Network error!");
    }

    setLoading(false);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <footer className="w-full bg-black text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT SECTION */}
          <div className="space-y-6 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              LET’S CONNECT
            </h2>

            <div className="space-y-3 text-gray-300">
              <p>
                Say hello at{" "}
                <a
                  href="mailto:danielbankz27@gmail.com"
                  className="underline hover:text-white text-lime-300"
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

              <p>
                For more info, here’s my{" "}
                <a href="#" className="underline hover:text-white">
                  resume
                </a>
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <Linkedin className="w-6 h-6 text-lime-300 cursor-pointer hover:opacity-80" />
              <Github className="w-6 h-6 text-lime-300 cursor-pointer hover:opacity-80" />
              <X className="w-6 h-6 text-lime-300 cursor-pointer hover:opacity-80" />
              <Instagram className="w-6 h-6 text-lime-300 cursor-pointer hover:opacity-80" />
            </div>

            <p className="text-gray-500 text-sm pt-80">© 2023 Robert Garcia</p>
          </div>

          {/* RIGHT SECTION — FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block mb-2 text-gray-400 text-sm">Name*</label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400 text-sm">Email*</label>
              <input
                name="email"
                type="email"
                placeholder="info@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400 text-sm">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Message Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400 text-sm">
                Message*
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-lime-300 text-black px-8 py-2 rounded-full font-semibold flex items-center justify-center hover:bg-lime-400 transition"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin"></div>
                  Sending...
                </div>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;

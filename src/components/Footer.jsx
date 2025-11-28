import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Linkedin, Github, X, Instagram } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SEND EMAIL
  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATION
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all required fields.");
      return;
    }

    // EMAILJS FUNCTION
    emailjs
      .send(
        "service_rzksrnn", // replace
        "template_rentvcw", // replace
        formData,
        "-klwM82zLxcL9SXoc" // replace
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <footer className="w-full bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold">LET’S CONNECT</h2>

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

            <p className="text-gray-300">
              call me ASP{" "}
              <a href="tel:+2349067596368" className="underline text-lime-300">
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

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-6">
            <Linkedin className="w-6 h-6 text-lime-300 cursor-pointer hover:opacity-80" />
            <Github className="w-6 h-6 text-lime-300 cursor-pointer hover:opacity-80" />
            <X className="w-6 h-6 text-lime-300 cursor-pointer hover:opacity-80" />
            <Instagram className="w-6 h-6 text-lime-300 cursor-pointer hover:opacity-80" />
          </div>

          <p className="text-gray-500 text-sm pt-80">© 2023 Robert Garcia</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Name */}
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

          {/* Email */}
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

          {/* Subject */}
          <div>
            <label className="block mb-2 text-gray-400 text-sm">Subject</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-gray-400 text-sm">Message*</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white"
              required
            ></textarea>
          </div>

          {/* Status Message */}
          {status && <p className="text-lime-300 font-medium">{status}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="bg-lime-300 text-black px-8 py-2 rounded-full font-semibold hover:bg-lime-400 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

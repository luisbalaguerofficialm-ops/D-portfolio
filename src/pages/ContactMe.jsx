import React, { useState } from "react";
import { Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ updated import
import { toast } from "react-toastify";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields ❌");
      return;
    }

    // Map formData keys to EmailJS template variables
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_rzksrnn", // your service ID
        "template_rentvcw", // your template ID
        templateParams,
        "-klwM82zLxcL9SXoc" // your public key
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send message. Try again ❌");
        }
      );
  };

  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-lime-300">
          Have a project in mind? Let’s talk! <br />{" "}
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-blue-600">
            "I’m just a message away—connect with me!"
          </span>
        </h4>

        <form onSubmit={handleSubmit} className="space-y-6 text-left w-full">
          <div>
            <label className="block mb-2 text-gray-400 text-sm">Name*</label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-300"
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
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-300"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400 text-sm">Subject</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400 text-sm">Message*</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-lime-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-lime-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-700 transition"
          >
            SUBMIT
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://linkedin.com/in/daniel-chekwube-790535361s"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition"
          >
            <Linkedin className="w-5 h-5 text-lime-300" />
          </a>
          <a
            href="https://github.com/luisbalaguerofficialm-ops"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition"
          >
            <Github className="w-5 h-5 text-lime-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

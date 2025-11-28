import React, { useEffect, useRef } from "react";
import daniel from "../assets/Daniel.jpg";
import { Linkedin, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon
import ScrollReveal from "scrollreveal";

import TextType from "../components/TextType";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // ScrollReveal Animations
    ScrollReveal().reveal(".down", {
      duration: 2000,
      origin: "top",
      distance: "300px",
      delay: 100,
      reset: true,
    });
    ScrollReveal().reveal(".linkedin", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 100,
      reset: true,
    });
    ScrollReveal().reveal(".github", {
      duration: 2000,
      origin: "bottom",
      distance: "900px",
      delay: 100,
      reset: true,
    });
    ScrollReveal().reveal(".whatsapp", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 100,
      reset: true,
    });

    // ⭐ Floating Image Animation
    let x = 0;
    let y = 0;
    let directionX = 1;
    let directionY = 1;
    let hoverBoost = 1;

    const floatImage = () => {
      if (!imgRef.current) return;

      x += 1.2 * directionX * hoverBoost;
      y += 1.0 * directionY * hoverBoost;

      if (x > 40 || x < -40) directionX *= -1;
      if (y > 30 || y < -30) directionY *= -1;

      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(floatImage);
    };

    floatImage();

    // Hover Motion Reaction
    const handleMouseEnter = () => (hoverBoost = 2);
    const handleMouseLeave = () => (hoverBoost = 1);

    const imageDiv = imgRef.current;
    imageDiv.addEventListener("mouseenter", handleMouseEnter);
    imageDiv.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageDiv.removeEventListener("mouseenter", handleMouseEnter);
      imageDiv.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-16 flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-20 md:py-0">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-4 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-color-cycle">
            <TextType
              text={[
                "Hi, I am Daniel Chekwube...",
                "I'm from Delta State, currently living in Lagos State.",
                "I love coding. Joining the tech field has been the greatest choice I've ever made.",
              ]}
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2000}
              textColors={["#22c55e", "#3b82f6", "#ffff00"]}
            />
          </h1>

          <p className="text-gray-300 max-w-md">
            <TextType
              text="A passionate Full-Stack Developer building accessible and user-friendly digital experiences."
              speed={40}
            />
          </p>

          <div className="flex items-center gap-4 mt-6 down">
            <Link
              to="/ContactMe"
              className="bg-lime-300 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-400 transition"
            >
              CONTACT ME
            </Link>

            {/* Functional Social Links */}
            <a
              href="https://www.linkedin.com/in/daniel-chekwube-790535361s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition linkedin"
            >
              <Linkedin className="w-5 h-5 text-lime-300" />
            </a>

            <a
              href="https://github.com/luisbalaguerofficialm-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition github"
            >
              <Github className="w-5 h-5 text-lime-300" />
            </a>

            <a
              href="https://wa.me/+2349067596368" // Replace with your WhatsApp number with country code, e.g., 2348012345678
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition whatsapp"
            >
              <FaWhatsapp className="w-5 h-5 text-lime-300" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div
          ref={imgRef}
          className="flex justify-center md:justify-end cursor-pointer"
        >
          <img
            src={daniel}
            alt="Profile"
            className="rounded-2xl w-[330px] md:w-[430px] transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

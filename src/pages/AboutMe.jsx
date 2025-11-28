import Navbar from "../components/Navbar";
import { Linkedin, Github } from "lucide-react";
import Footer from "../components/Footer";
import daniel from "../assets/Daniel.jpg";
import TextType from "../components/TextType";
import ScrollReveal from "scrollreveal";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const AboutMe = () => {
  const cyberRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // allows animations to repeat
    });

    sr.reveal(".linux", {
      duration: 4000,
      origin: "top",
      distance: "20px",
      delay: 100,
    });
    sr.reveal(".burpsuite", {
      duration: 2000,
      origin: "top",
      distance: "20px",
      delay: 200,
    });
    sr.reveal(".metasploit", {
      duration: 2000,
      origin: "left",
      distance: "400px",
      delay: 300,
    });
    sr.reveal(".wireshark", {
      duration: 2000,
      origin: "bottom",
      distance: "20px",
      delay: 400,
    });
    sr.reveal(".firewalls", {
      duration: 2000,
      origin: "top",
      distance: "200px",
      delay: 500,
    });
    sr.reveal(".nessus", {
      duration: 2000,
      origin: "right",
      distance: "300px",
      delay: 600,
    });
    if (cyberRef.current) {
      gsap.to(cyberRef.current, {
        x: 50, // move 50px to the right
        duration: 2,
        repeat: -1, // infinite
        yoyo: true, // back and forth
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="w-full bg-black text-white py-4">
      <Navbar />

      {/* Hero Title */}
      <div className="items-center justify-between mt-20 text-center">
        <h2 className="text-5xl text-yellow-500 font-extrabold">
          <TextType
            text={[
              "SECURITY-DRIVEN FULL-STACK SOFTWARE ENGINEER",
              "Full-Stack Developer & Cybersecurity Specialist",
            ]}
            typingSpeed={60}
            deletingSpeed={40}
            pauseDuration={1800}
            textColors={["#facc15", "#16a34a"]}
          />
        </h2>
      </div>

      {/* About Me Section */}
      <section className="w-full text-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Title */}
          <div className="flex items-start">
            <h2 className="text-5xl md:text-6xl text-yellow-500 font-extrabold tracking-tight">
              <TextType
                text={["ABOUT ME"]}
                typingSpeed={70}
                cursorCharacter="_"
                textColors={["#facc15"]}
              />
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6 max-w-xl text-left">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              <TextType
                text={[
                  "Hello! I’m Daniel Chekwube, a passionate and dedicated Full Stack Developer with a growing expertise in Cybersecurity.",
                  "Based in Lagos, Nigeria, I build secure and modern web solutions.",
                ]}
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={2000}
                textColors={["#22c55e", "#3b82f6"]}
              />
            </h3>

            <p className="text-green-600 leading-relaxed">
              My journey into tech began with a love for solving problems,
              building digital solutions, and understanding how systems work
              behind the scenes. Over time, that curiosity evolved into a deep
              commitment to creating applications that are functional, secure,
              efficient, and beautifully designed.
            </p>

            <p className="text-green-500">
              I specialize in building modern web applications using
              technologies such as React, Node.js, Express, and MongoDB, with a
              strong focus on writing clean, scalable, and maintainable code. I
              enjoy transforming ideas into fully-developed digital products.
            </p>

            <p className="text-green-600">
              Beyond development, I have strong foundational knowledge in
              cybersecurity, including secure coding principles, authentication
              flows, and threat awareness. Security isn’t just an add-on—it’s an
              essential part of how I build.
            </p>

            <a
              href="#"
              className="text-lime-300 font-semibold underline underline-offset-4 hover:text-lime-400"
            >
              MORE ABOUT ME
            </a>

            {/* Buttons & Icons */}
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-lime-300 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-400 transition">
                CONTACT ME
              </button>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition"
              >
                <Linkedin className="w-5 h-5 text-lime-300" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition"
              >
                <Github className="w-5 h-5 text-lime-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div
        className="h-[900px] md:h-[1100px] bg-center bg-no-repeat flex justify-center items-center overflow-hidden m-0 p-0"
        style={{
          backgroundImage: `url(${daniel})`,
          backgroundSize: "90%",
        }}
      ></div>

      {/* ====================== */}
      {/* ================== Capabilities Section ================== */}
      <section className="w-full text-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE TITLE */}
          <div className="flex items-start text-center ">
            <h2 className="text-4xl text-yellow-300 text-left md:text-6xl font-extrabold tracking-tight">
              <TextType
                text={["MY CAPABILITIES"]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseDuration={2000}
                textColors={["#facc15"]}
                showCursor={true}
              />
            </h2>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-8 max-w-xl text-left">
            <p className="text-gray-300 leading-relaxed">
              I’m a Full Stack Developer with strong cybersecurity awareness,
              capable of building secure, responsive, and scalable web
              applications. My strengths include creating intuitive user
              interfaces, developing efficient backend systems, integrating
              APIs, and applying cybersecurity best practices to ensure
              reliability and protection across all projects.
            </p>

            {/* Bullet Point Capabilities */}
            <ul className="space-y-3 text-lime-300">
              <li className="flex gap-2">
                • Full Stack Development (Frontend + Backend)
              </li>
              <li className="flex gap-2">
                • Building secure, scalable, and responsive web applications
              </li>
              <li className="flex gap-2">
                • Creating intuitive and modern user interfaces
              </li>
              <li className="flex gap-2">
                • Developing robust server-side logic and REST APIs
              </li>
              <li className="flex gap-2">
                • Applying cybersecurity best practices
              </li>
              <li className="flex gap-2">• Database design and management</li>
              <li className="flex gap-2">
                • Version control with Git & GitHub
              </li>
              <li className="flex gap-2">
                • Performance optimization and debugging
              </li>
              <li className="flex gap-2">
                • Problem-solving and system improvement
              </li>
              <li className="flex gap-2">
                • Continuous learning and adapting to new technologies
              </li>
            </ul>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 cyber" ref={cyberRef}>
              <p className="rounded-lg border h-9 w-[120px] font-medium px-4 py-1 text-[#ffffff] linux">
                Kali Linux
              </p>
              <p className="rounded-lg border h-9 w-[120px] font-medium px-8 py-1 text-[#ffffff] burpsuite">
                burpsuite
              </p>
              <p className="rounded-lg border h-9 w-[120px] font-medium px-8 py-1 text-[#ffffff] metasploit">
                Metasploit
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <p className="rounded-lg border h-9 w-[120px] font-medium px-3 py-1 text-[#ffffff] wireshark">
                Wireshark
              </p>
              <p className="rounded-lg border h-9 w-[120px] font-medium px-4 py-1 text-[#ffffff] firewalls">
                Firewalls
              </p>
              <p className="rounded-lg border h-9 w-[140px] font-medium px-2 py-1 text-[#ffffff] nessus">
                Nessus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== Experience Section ================== */}
      <section className="w-full text-white py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT SIDE TITLE */}
          <div className="flex items-start text-left">
            <h2 className="text-4xl text-yellow-300 md:text-6xl font-extrabold tracking-tight">
              <TextType
                text={["MY EXPERIENCE"]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseDuration={2000}
                textColors={["#facc15"]}
                showCursor={true}
              />
            </h2>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-8 max-w-xl text-left">
            {/* Job Title + Date */}
            <div>
              <h3 className="text-2xl font-semibold text-white">
                <TextType
                  text={["Freelance Developer"]}
                  typingSpeed={50}
                  deletingSpeed={30}
                  textColors={["#22c55e"]}
                />
              </h3>
              <p className="text-gray-400 text-sm mt-1">Nov 2023 — Present</p>
            </div>

            {/* Experience Description */}
            <p className="text-gray-300 leading-relaxed">
              As a freelance developer, I design and build modern, responsive,
              and secure web applications for clients across different
              industries. My work includes front-end development, backend API
              integration, UI/UX improvements, debugging, and optimizing overall
              system performance. I collaborate closely with clients to
              transform ideas into functional, polished digital experiences.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 stay">
              <p className="rounded-lg border h-9 w-[120px] font-medium px-8 py-1 text-white  HTML">
                HTML
              </p>
              <p className="rounded-lg border h-9 w-[120px] font-medium px-8 py-1 text-white  CSS">
                CSS
              </p>
              <p className="rounded-lg border h-9 w-[120px] font-medium px-8 py-1 text-white Javascript">
                Javascript
              </p>
              <p className="rounded-lg border h-9 w-[120px] font-medium px-8 py-1 text-white Jquery">
                Jquery
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <p className="rounded-lg border h-9 w-[120px] font-medium px-3 py-1 text-white Access">
                Accessibility
              </p>
              <p className="rounded-lg border h-9 w-[120px] font-medium px-4 py-1 text-white">
                Figma
              </p>
              <p className="rounded-lg border h-9 w-[140px] font-medium px-2 py-1 text-white   Figma">
                Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;

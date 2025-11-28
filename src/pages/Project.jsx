import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import allCountriesImg from "../assets/allCountriesImg .png";
import realEstateImg from "../assets/realEstateImg.png";
import spaceImg from "../assets/space.png";
import contact from "../assets/contact.png";
import goal from "../assets/goal.png";
import fylo from "../assets/fylo.png";
import advice from "../assets/advice .png";
import backend from "../assets/backend.png";

const Project = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-3 md:px-10">
      <h5 className="text-center text-4xl font-bold text-lime-300">
        PROJECTS...
      </h5>

      <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-7 mt-6 mb-6">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 🌍 PROJECT 1 — ALL COUNTRIES */}
          <div className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            {/* IMAGE ON TOP */}
            <div className="p-4">
              <span className="inline-block text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full mb-3">
                Conceptual Work
              </span>

              <img
                src={allCountriesImg}
                alt="All Countries Project"
                className="rounded-lg w-full h-44 object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="p-4 text-left space-y-3">
              <h3 className="text-xl font-bold">
                REST Countries — All Countries
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Entire countries project.
              </p>

              <div className="mt-3">
                <h4 className="text-xs text-gray-400 mb-1">PROJECT INFO</h4>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Tech Stack</span>
                  <span className="text-green-400">React • Node • API</span>
                </div>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Role</span>
                  <span className="text-green-500">Full-Stack..</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://all-countries-omega.vercel.app/"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  LIVE DEMO <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/daniel689671/AllCountries"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  SEE ON GITHUB <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 🏠 PROJECT 2 — REAL ESTATE */}
          <div className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="p-4">
              <img
                src={realEstateImg}
                alt="Real Estate Project"
                className="rounded-lg w-full h-44 object-cover"
              />
            </div>

            <div className="p-4 text-left space-y-3">
              <h3 className="text-xl font-bold">Real Estate</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Real estate properties project.
              </p>

              <div className="mt-3">
                <h4 className="text-xs text-gray-400 mb-1">PROJECT INFO</h4>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Tech</span>
                  <span className="text-green-400">React • MongoDB • API</span>
                </div>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Role</span>
                  <span className="text-green-500">Full-Stack..</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://beta-house-one.vercel.app/"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  LIVE DEMO <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/luisbalaguerofficialm-ops/beta-house"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  SEE ON GITHUB <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Duplicate Project 1 (Optional / Your 3rd project) */}
          <div className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="p-4">
              <span className="inline-block text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full mb-3">
                Conceptual Work
              </span>

              <img
                src={spaceImg}
                alt="All Countries Project"
                className="rounded-lg w-full h-44 object-cover"
              />
            </div>

            <div className="p-4 text-left space-y-3">
              <h3 className="text-xl font-bold">
                SPACE TOURISM MULTI-page website
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                So, you want to travel to Space
              </p>

              <div className="mt-3">
                <h4 className="text-xs text-gray-400 mb-1">PROJECT INFO</h4>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Tech Stack</span>
                  <span className="text-yellow-400">
                    React • Tailwind • Vite
                  </span>
                </div>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Role</span>
                  <span className="text-yellow-500">Frontend..</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href=""
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  LIVE DEMO <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href=""
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  SEE ON GITHUB <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* =============Your 3rd project=========== */}

          <div className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="p-4">
              <span className="inline-block text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full mb-3">
                Conceptual Work
              </span>

              <img
                src={contact}
                alt="All Countries Project"
                className="rounded-lg w-full h-44 object-cover"
              />
            </div>

            <div className="p-4 text-left space-y-3">
              <h3 className="text-xl font-bold">CONTACT FORM</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Building accessible forms is a crucial task for front-end
                developers.
              </p>

              <div className="mt-3">
                <h4 className="text-xs text-gray-400 mb-1">PROJECT INFO</h4>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Tech Stack</span>
                  <span className="text-yellow-400">HTML • CSS • JS</span>
                </div>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Role</span>
                  <span className="text-yellow-500">Frontend..</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://main-contact.vercel.app/"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  LIVE DEMO <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/daniel689671/MAIN--CONTACT"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  SEE ON GITHUB <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* ================================== */}
          <div className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="p-4">
              <span className="inline-block text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full mb-3">
                Conceptual Work
              </span>

              <img
                src={goal}
                alt="All Countries Project"
                className="rounded-lg w-full h-44 object-cover"
              />
            </div>

            <div className="p-4 text-left space-y-3">
              <h3 className="text-xl font-bold">ON-GOAL</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Set your exiting goal
              </p>

              <div className="mt-3">
                <h4 className="text-xs text-gray-400 mb-1">PROJECT INFO</h4>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Tech Stack</span>
                  <span className="text-green-400">React • Node • API</span>
                </div>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Role</span>
                  <span className="text-green-500">Full-Stack..</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://newgoal.vercel.app/"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  LIVE DEMO <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/daniel689671/NEWGOAL"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  SEE ON GITHUB <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* ============================== */}
          <div className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="p-4">
              <span className="inline-block text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full mb-3">
                Conceptual Work
              </span>

              <img
                src={fylo}
                alt="All Countries Project"
                className="rounded-lg w-full h-44 object-cover"
              />
            </div>

            <div className="p-4 text-left space-y-3">
              <h3 className="text-xl font-bold">FYLO</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                dark theme landing page
              </p>

              <div className="mt-3">
                <h4 className="text-xs text-gray-400 mb-1">PROJECT INFO</h4>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Tech Stack</span>
                  <span className="text-yellow-400">
                    React • Tailwind •Vite{" "}
                  </span>
                </div>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Role</span>
                  <span className="text-yellow-500">Full-Stack..</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://fylowebsite-swart.vercel.app/"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  LIVE DEMO <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/daniel689671/fylowebsite"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  SEE ON GITHUB <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* ============================ */}
          {/* ============================== */}
          <div className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="p-4">
              <span className="inline-block text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full mb-3">
                Conceptual Work
              </span>

              <img
                src={advice}
                alt="All Countries Project"
                className="rounded-lg w-full h-44 object-cover"
              />
            </div>

            <div className="p-4 text-left space-y-3">
              <h3 className="text-xl font-bold">Advice generator</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                The perfect project if you're learning how to interact with
                3rd-party APIs.
              </p>

              <div className="mt-3">
                <h4 className="text-xs text-gray-400 mb-1">PROJECT INFO</h4>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Tech Stack</span>
                  <span className="text-green-400">React • JS • API</span>
                </div>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Role</span>
                  <span className="text-green-500">Full-Stack..</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wise-app.vercel.app/"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  LIVE DEMO <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/daniel689671/WISE-APP"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  SEE ON GITHUB <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* ======================== */}
          <div className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden">
            <div className="p-4">
              <span className="inline-block text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full mb-3">
                Conceptual Work
              </span>

              <img
                src={backend}
                alt="backend"
                className="rounded-lg w-full h-44 object-cover"
              />
            </div>

            <div className="p-4 text-left space-y-3">
              <h3 className="text-xl font-bold">BACKEND</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                non-visible
              </p>

              <div className="mt-3">
                <h4 className="text-xs text-gray-400 mb-1">PROJECT INFO</h4>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Tech Stack</span>
                  <span className="text-blue-400">Nodemon • JS • API </span>
                </div>

                <div className="border-t border-gray-700 py-2 flex justify-between text-sm">
                  <span className="text-gray-300">Role</span>
                  <span className="text-blue-500">Backend..</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://beta-house-backend.vercel.app/"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  LIVE DEMO <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/luisbalaguerofficialm-ops/beta-house-backend"
                  target="_blank"
                  className="text-lime-300 underline flex items-center gap-1 text-sm"
                >
                  SEE ON GITHUB <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { ArrowUpRight, Github } from "lucide-react";

// Tech Images
import java from "../../assets/javascript.jpg";
import html from "../../assets/html.png";
import css from "../../assets/csslogo.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import postman from "../../assets/portman.png";
import vercel from "../../assets/vercel.webp";
import vite from "../../assets/vite.jpg";
import python from "../../assets/python.jpg";
import figma from "../../assets/figma.jpg";
import nodemon from "../../assets/nodemon.png";
import express from "../../assets/express.png";
import TypeScript from "../../assets/Typescript.png";
import tailwind from "../../assets/tailwind.png";
import render from "../../assets/render.png";

// Project Screenshots (static images saved in assets)
import allCountriesImg from "../../assets/allCountriesImg .png";
import realEstateImg from "../../assets/realEstateImg.png";
import eCommerceImg from "../../assets/eCommerceImg .png";

const HeroSection = () => {
  useEffect(() => {
    ScrollReveal().reveal(".download", {
      duration: 2000,
      origin: "top",
      distance: "20px",
      delay: 100,
      reset: true,
    });
    ScrollReveal().reveal(".years", {
      duration: 2000,
      origin: "right",
      distance: "300px",
      delay: 100,
      reset: true,
    });
    ScrollReveal().reveal(".express", {
      duration: 2000,
      origin: "left",
      distance: "400px",
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal(".three", {
      duration: 2000,
      origin: "top",
      distance: "400px",
      delay: 250,
      reset: true,
    });
    ScrollReveal().reveal(".typeScript", {
      duration: 2000,
      origin: "top",
      distance: "400px",
      delay: 250,
      reset: true,
    });
    ScrollReveal().reveal(".linked", {
      duration: 2000,
      origin: "left",
      distance: "300px",
      delay: 250,
      reset: true,
    });
    ScrollReveal().reveal(".git", {
      duration: 2000,
      origin: "left",
      distance: "400px",
      delay: 300,
      reset: true,
    });
    ScrollReveal().reveal(".insta", {
      duration: 2000,
      origin: "left",
      distance: "200px",
      delay: 200,
      reset: true,
    });
    ScrollReveal().reveal(".whats", {
      duration: 2000,
      origin: "left",
      distance: "100px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".postman", {
      duration: 5000,
      origin: "bottom",
      distance: "100px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".java", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".react", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".css", {
      duration: 2000,
      origin: "top",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".html", {
      duration: 2000,
      origin: "top",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".figma", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".tailwind", {
      duration: 2000,
      origin: "top",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".node", {
      duration: 2000,
      origin: "top",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".eCommerce", {
      duration: 2000,
      origin: "bottom",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".real", {
      duration: 5000,
      origin: "rigth",
      distance: "400px",
      delay: 100,
      reset: true,
    });
    ScrollReveal().reveal(".vite", {
      duration: 2000,
      origin: "left",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".vercel", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 150,
      reset: true,
    });
    ScrollReveal().reveal(".nodemon", {
      duration: 2000,
      origin: "bottom",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".render", {
      duration: 2000,
      origin: "bottom",
      distance: "900px",
      delay: 150,
      reset: true,
    });

    ScrollReveal().reveal(".country", {
      duration: 2000,
      origin: "top",
      distance: "500px",
      delay: 100,
      reset: true,
    });
  }, []);

  return (
    <div className="w-full bg-black text-white py-2 px-6 md:px-16">
      {/* <div className="items-center justify-center flex-col flex download">
        <div className="mt-20 flex sm:grid sm:grid-cols-4 flex-wrap gap-4 text-[10px] font-extrabold text-gray-600 dark:text-gray-300"> */}
      {/* HTML */}
      {/* <div className="flex items-center mb-2 flex-cols html">
            <span className="px-2 py-1 rounded flex gap-1">
              <img src={html} alt="HTML" className="md:w-30 w-27 h-15" />
              <p className="font-semibold text-2xl">HTML</p>
            </span>
          </div> */}

      {/* CSS */}
      {/* <div className="flex items-center mb-2 flex-cols css">
            <span className="px-2 py-1 rounded flex gap-1">
              <img src={css} alt="CSS" className="md:w-35 w-32 h-14" />
              <p className="font-semibold text-2xl">CSS</p>
            </span>
          </div> */}

      {/* React */}
      {/* <div className="flex items-center flex-cols react">
            <span className="px-2 py-1 rounded flex">
              <img src={react} alt="React" className="w-53 h-15" />
            </span>
          </div> */}

      {/* JavaScript */}
      {/* <div className="flex items-center mb-2 flex-cols java">
            <span className="px-2 py-1 rounded flex gap-1 mb-1">
              <img src={java} alt="JavaScript" className="w-35 h-15" />
              <p className="font-semibold text-2xl">JavaScript</p>
            </span>
          </div> */}

      {/* Node.js */}
      {/* <div className="flex items-center mb-2 flex-cols node">
            <span className="px-2 py-1 rounded flex gap-1 ml-0.5">
              <img src={node} alt="Node.js" className="md:w-53 w-30 h-15" />
              <p className="font-semibold text-2xl">NODE.JS</p>
            </span>
          </div> */}

      {/* Python */}
      {/* <div className="flex items-center mb-2 flex-cols python">
            <span className="px-2 py-1 rounded flex gap-1">
              <img src={python} alt="Python" className="w-37 h-15" />
              <p className="font-semibold text-2xl">Python</p>
            </span>
          </div> */}

      {/* Express */}
      {/* <div className="flex items-center mb-2 flex-cols express">
            <span className="px-2 py-1 rounded flex gap-1 ml-2">
              <img
                src={express}
                alt="Express"
                className="bg-gray-100 w-40 h-15"
              />
              <p className="font-semibold text-2xl">EXPRESS</p>
            </span>
          </div> */}

      {/* Nodemon */}
      {/* <div className="flex items-center flex-cols nodemon">
            <span className="px-2 py-1 rounded flex gap-1 ml-1">
              <img src={nodemon} alt="Nodemon" className="md:w-35 w-30 h-15" />
              <p className="font-semibold text-2xl">NODEMON</p>
            </span>
          </div> */}

      {/* TypeScript */}
      {/* <div className="flex items-center flex-cols typeScript">
            <span className="px-2 py-1 rounded flex gap-1 ml-1">
              <img src={TypeScript} alt="TypeScript" className="w-35 h-15" />
              <p className="font-semibold text-2xl">TYPESCRIPT</p>
            </span>
          </div> */}
      {/* </div>
      </div> */}

      {/* Featured Projects */}
      <div className="max-w-6xl text-left mx-auto mt-30 mb-17">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          FEATURED PROJECTS
        </h2>
        <p className="text-gray-400 mt-3">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>

      {/* Project 1 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-[#111] p-5 rounded-xl text-left shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Conceptual Work
          </span>
          <img
            src={allCountriesImg}
            alt="All Countries Project"
            className="rounded-lg w-full country"
          />
        </div>
        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            REST Countries. All Countries
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Entire countries project
          </p>
          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Tech Stack</span>

              <span className="text-gray-400">React • Node • API</span>
            </div>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>
              <span className="text-blue-500 text-medium">Full-Stack..</span>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://all-countries-omega.vercel.app/"
              target="_blank"
              className="text-lime-300 flex underline items-center gap-2"
            >
              LIVE DEMO <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/daniel689671/AllCountries"
              target="_blank"
              className="text-lime-300 flex underline items-center gap-2"
            >
              SEE ON GITHUB <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="max-w-6xl mx-auto mt-30 grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-[#111] p-5 rounded-xl shadow-lg border border-gray-800">
          <img
            src={realEstateImg}
            alt="Real Estate Project"
            className="rounded-lg w-full real"
          />
        </div>
        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">Real Estate</h3>
          <p className="text-gray-300 leading-relaxed">
            Real estate properties project.
          </p>
          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Tech</span>
              <span className="text-gray-400">React • MongoDB • API</span>
            </div>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>
              <span className="text-blue-500 text-medium">Full-Stack..</span>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://beta-house-one.vercel.app/"
              target="_blank"
              className="text-lime-300 underline flex items-center gap-2"
            >
              LIVE DEMO <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/luisbalaguerofficialm-ops/beta-house"
              target="_blank"
              className="text-lime-300 underline flex items-center gap-2"
            >
              SEE ON GITHUB <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="max-w-6xl mx-auto mt-30 grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-[#111] p-5 rounded-xl shadow-lg border border-gray-800">
          <span className="inline-block text-medium bg-gray-800 text-gray-200 px-3 py-1 rounded-full mb-4">
            Conceptual Work
          </span>
          <img
            src={eCommerceImg}
            alt="E-Commerce Project"
            className="rounded-lg w-full eCommerce"
          />
        </div>
        <div className="space-y-6 text-left">
          <h3 className="text-2xl md:text-3xl font-bold">E-Commerce Store</h3>
          <p className="text-gray-300 leading-relaxed">
            Modern, responsive e-commerce with filtering, cart, checkout & API
            integration.
          </p>
          <div className="mt-6">
            <h4 className="text-sm text-gray-400 mb-2">PROJECT INFO</h4>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Tech Stack</span>
              <span className="text-gray-400">React • Tailwind • Vite</span>
            </div>
            <div className="border-t border-gray-700 py-3 flex justify-between">
              <span className="text-gray-300">Role</span>
              <span className="text-blue-500 text-medium">Full-Stack...</span>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://e-commerce-wheat-three.vercel.app/"
              target="_blank"
              className="text-lime-300 underline flex items-center gap-2"
            >
              LIVE DEMO <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/daniel689671/-e-commerce"
              target="_blank"
              className="text-lime-300 underline flex items-center gap-2"
            >
              SEE ON GITHUB <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* ======================= */}
      {/* <div className="w-full  bg-gray-400 py-4 mt-20">
        <div className="flex items-center  gap-20 justify-center overflow-x-auto md:overflow-visible px-4 md:px-0">
          <img src={postman} alt="" className="w-20 h-auto md:w-24 postman" />
          <img src={vercel} alt="" className="w-20 h-auto md:w-24 vercel" />
          <img src={vite} alt="" className="w-20 h-auto md:w-24 vite" />
          <img src={figma} alt="" className="w-20 h-auto md:w-24 figma" />
          <img src={tailwind} alt="" className="w-20 h-auto md:w-24 tailwind" />
          <img src={render} alt="" className="w-20 h-auto md:w-24 render" />
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;

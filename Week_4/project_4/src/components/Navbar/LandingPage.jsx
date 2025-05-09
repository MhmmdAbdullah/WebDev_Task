import { motion } from "framer-motion";
import React from "react";
import ProfileImage from '../../assets/myprofile.png';
import { Hand } from 'lucide-react';

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
        className="w-full bg-green-900 min-h-screen relative overflow-hidden"
      >
        <div className="flex justify-center items-center pt-10 pb-10 px-6 min-h-screen">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2
            }}
            className="relative z-10"
          >
            <img
              src={ProfileImage}
              alt="My Profile"
              className="w-full max-w-lg h-auto object-contain"
            />
          </motion.div>

          {/* Hover Button */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.6
            }}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20"
          >
            <div className="group flex items-center bg-black/60 text-white w-10 h-10 rounded-full hover:w-32 transition-all duration-300 cursor-pointer overflow-hidden px-3 hover:px-4">
              <Hand className="text-yellow-400 min-w-4" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Hi I'm Adho
              </span>
            </div>
          </motion.div>
        </div>

        {/* Running Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.4
          }}
          className="absolute bottom-20 left-0 right-0 z-10"
        >
          <div className="w-full overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-5xl md:text-7xl font-medium inline-block px-20 text-white">
                High School Student — Freelance —&nbsp;
              </span>
              <span className="text-5xl md:text-7xl font-medium inline-block px-20 text-white">
                High School Student — Freelance —&nbsp;
              </span>
            </div>
          </div>
        </motion.div>
      </motion.section>
      {/* Hero Section End */}

      {/* About Section */}
      <section className="w-full">
        <div className="flex justify-between items-center pt-16 pb-16 px-6 max-md:flex-col">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-7 w-full md:w-1/2"
          >
            <h2 className="text-xl font-semibold">Creative Developer</h2>
            <h1 className="text-4xl md:text-6xl font-semibold">High School Student</h1>
            <p className="text-sm">
              I'm a passionate student developer focused on creating beautiful, responsive web experiences. 
              Combining creativity with technical skills to build innovative digital solutions.
            </p>
            <button className="bg-green-900 cursor-pointer text-white p-4 w-40 h-14 flex items-center justify-center">
              Contact
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              damping: 20,
            }}
            className="flex w-full md:w-1/2 justify-center mt-10 md:mt-0"
          >
            <img 
              src="/api/placeholder/400/320" 
              alt="My Work" 
              className="w-full max-w-md h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>
      {/* About Section End */}

      {/* Skills Section */}
      <section className="w-full bg-gray-50">
        <div className="flex justify-between items-start gap-11 pt-16 pb-16 px-6 max-md:flex-col">
          <div className="flex flex-col gap-10 items-center justify-center w-full">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.4,
                damping: 20,
              }}
              className="text-xl font-semibold text-center"
            >
              My Skills & Expertise
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="text-4xl md:text-6xl font-semibold w-full text-center"
            >
              What I Do
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.5,
                  damping: 20,
                }}
                className="flex flex-col gap-4 items-center justify-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Hand className="text-green-900" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-black">Web Development</h2>
                <p className="text-sm text-gray-500 text-center">
                  Creating responsive, interactive websites with modern frameworks and clean code.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.7,
                  damping: 20,
                }}
                className="flex flex-col gap-4 items-center justify-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Hand className="text-green-900" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-black">UI/UX Design</h2>
                <p className="text-sm text-gray-500 text-center">
                  Designing intuitive user interfaces with a focus on user experience and accessibility.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.9,
                  damping: 20,
                }}
                className="flex flex-col gap-4 items-center justify-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Hand className="text-green-900" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-black">Digital Marketing</h2>
                <p className="text-sm text-gray-500 text-center">
                  Implementing strategies to increase online visibility and engagement for brands.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section End */}

      {/* Projects Section */}
      <section className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold pt-16 pb-8 px-6"
        >
          My Latest Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-4 overflow-hidden rounded-lg shadow-md"
          >
            <img src="/api/placeholder/400/250" alt="Project 1" className="w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">E-commerce Website</h2>
              <p className="text-sm text-gray-500 mt-2">
                A modern e-commerce platform with integrated payment systems and responsive design.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              damping: 20,
            }}
            className="flex flex-col gap-4 overflow-hidden rounded-lg shadow-md"
          >
            <img src="/api/placeholder/400/250" alt="Project 2" className="w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Portfolio Template</h2>
              <p className="text-sm text-gray-500 mt-2">
                A customizable portfolio template for creative professionals with smooth animations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.7,
              damping: 20,
            }}
            className="flex flex-col gap-4 overflow-hidden rounded-lg shadow-md"
          >
            <img src="/api/placeholder/400/250" alt="Project 3" className="w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Mobile App UI</h2>
              <p className="text-sm text-gray-500 mt-2">
                A sleek user interface design for a productivity mobile application.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Projects Section End */}

      {/* Testimonials Section */}
      <section className="w-full bg-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold pt-16 pb-8 px-6"
        >
          What Clients Say
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
          >
            <p className="text-gray-700 italic">
              "Working with Adho was a great experience. The attention to detail and responsiveness 
              throughout the project was exceptional."
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="/api/placeholder/48/48" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">Marketing Director</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              damping: 20,
            }}
            className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
          >
            <p className="text-gray-700 italic">
              "The website Adho created for our business exceeded our expectations. 
              It's beautiful, functional, and has helped increase our online presence."
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="/api/placeholder/48/48" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">David Chen</h3>
                <p className="text-sm text-gray-500">Small Business Owner</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.7,
              damping: 20,
            }}
            className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
          >
            <p className="text-gray-700 italic">
              "Adho brings a rare combination of technical skill and creative vision. 
              The project was delivered on time and exactly as we had envisioned."
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="/api/placeholder/48/48" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">Michelle Kim</h3>
                <p className="text-sm text-gray-500">Creative Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section End */}

      {/* Contact Section */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 pb-16 px-6 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex flex-col w-full md:w-1/2"
          >
            <h1 className="text-4xl font-semibold mb-6">Let's Work Together</h1>
            <p className="text-gray-700 mb-8">
              I'm always open to new projects and collaborations. Whether you have a specific project 
              in mind or just want to chat about possibilities, feel free to reach out.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-green-900 hover:text-green-700">
                <Hand size={24} />
              </a>
              <a href="#" className="text-green-900 hover:text-green-700">
                <Hand size={24} />
              </a>
              <a href="#" className="text-green-900 hover:text-green-700">
                <Hand size={24} />
              </a>
              <a href="#" className="text-green-900 hover:text-green-700">
                <Hand size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              damping: 20,
            }}
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 bg-gray-100 rounded-md outline-none w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 bg-gray-100 rounded-md outline-none w-full"
            />
            <textarea
              placeholder="Your Message"
              className="p-4 bg-gray-100 rounded-md outline-none w-full min-h-32"
            ></textarea>
            <button className="bg-green-900 hover:bg-green-800 transition-colors cursor-pointer text-white p-4 w-40 rounded-md">
              Send Message
            </button>
          </motion.div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Footer */}
      <footer className="w-full bg-green-900 text-white">
        <div className="flex justify-between items-center pt-8 pb-8 px-6 max-md:flex-col max-md:gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Adho. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-green-300 transition-colors">
              <Hand size={20} />
            </a>
            <a href="#" className="text-white hover:text-green-300 transition-colors">
              <Hand size={20} />
            </a>
            <a href="#" className="text-white hover:text-green-300 transition-colors">
              <Hand size={20} />
            </a>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default LandingPage;
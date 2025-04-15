import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Komponen RunningText
  const RunningText = ({ items }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition(prev => (prev - 1) % -2000);
      }, 20);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex" style={{ transform: `translateX(${position}px)` }}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="w-32 h-4 bg-slate-100" />
              <div className="text-slate-100 text-6xl md:text-9xl font-medium font-poppins mx-4">
                {item}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  // Komponen HorizontalScroll
  const HorizontalScroll = ({ items, direction = 'left' }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setPosition(prev => (direction === 'left' ? prev - 1 : prev + 1) % -2000);
      }, 20);
      return () => clearInterval(interval);
    }, [direction]);

    return (
      <div className="overflow-hidden">
        <div className="inline-flex" style={{ transform: `translateX(${position}px)` }}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className="px-8 py-10 md:px-12 md:py-14 bg-green-600 rounded-lg inline-flex flex-col justify-start items-start gap-2.5 mx-4"
            >
              <img 
                className="w-64 h-36 md:w-80 md:h-48" 
                src="https://placehold.co/348x194" 
                alt="Work sample" 
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const runningTextItems = ['High School Student', 'Freelancer', 'Data Science Student', 'Class Facilitator'];
  const workItems = Array(10).fill(0);

  const handleContactClick = () => {
    setActiveSection('contact');
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="relative bg-green-200 overflow-hidden">
      {/* Navigation */}
      <nav className="w-full h-16 fixed top-0 left-0 z-50 bg-green-900 flex justify-between items-center px-4 md:px-8">
        <div className="text-white text-lg font-normal font-poppins leading-7">@Muhammad_Abdullah</div>
        <div className="hidden md:flex gap-6">
          <button 
            className="text-white text-lg font-normal font-poppins hover:text-green-200 transition-colors"
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button 
            className="text-white text-lg font-normal font-poppins hover:text-green-200 transition-colors"
            onClick={() => setActiveSection('work')}
          >
            Work
          </button>
          <button 
            className="text-white text-lg font-normal font-poppins hover:text-green-200 transition-colors"
            onClick={handleContactClick}
          >
            Contact
          </button>
        </div>
        <button 
          className="w-10 h-10 md:w-12 md:h-12 relative rounded-full md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 bg-neutral-950 rounded-full border-2 border-neutral-950" />
          <div className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 mt-2"></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-neutral-950 z-40 p-6 flex flex-col items-end">
          <button 
            className="w-10 h-10 relative rounded-full mb-8"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <div className="absolute inset-0 bg-white rounded-full border-2 border-white" />
            <div className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-neutral-950 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-neutral-950 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
          </button>
          
          <div className="flex-1 w-full flex flex-col items-center justify-center gap-8">
            <button 
              className="text-white text-3xl md:text-4xl font-medium font-poppins hover:text-green-200 transition-colors"
              onClick={() => { setActiveSection('home'); setMenuOpen(false); }}
            >
              Home
            </button>
            <button 
              className="text-white text-3xl md:text-4xl font-medium font-poppins hover:text-green-200 transition-colors"
              onClick={() => { setActiveSection('about'); setMenuOpen(false); }}
            >
              About
            </button>
            <button 
              className="text-white text-3xl md:text-4xl font-medium font-poppins hover:text-green-200 transition-colors"
              onClick={() => { setActiveSection('work'); setMenuOpen(false); }}
            >
              Work
            </button>
            <button 
              className="text-white text-3xl md:text-4xl font-medium font-poppins hover:text-green-200 transition-colors"
              onClick={() => { handleContactClick(); setMenuOpen(false); }}
            >
              Contact
            </button>
          </div>
          
          <div className="flex justify-center gap-6 pb-6">
            <a href="#" className="text-white text-base font-normal font-poppins hover:text-green-200 transition-colors">Linkedin</a>
            <a href="#" className="text-white text-base font-normal font-poppins hover:text-green-200 transition-colors">Twitter</a>
            <a href="#" className="text-white text-base font-normal font-poppins hover:text-green-200 transition-colors">Instagram</a>
            <a href="#" className="text-white text-base font-normal font-poppins hover:text-green-200 transition-colors">Webflow</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="w-full h-screen min-h-[700px] relative bg-green-900 pt-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-16 md:top-24">
          <img 
            className="w-64 h-80 md:w-[400px] md:h-[500px] lg:w-[501px] lg:h-[654px]" 
            src="https://placehold.co/501x654" 
            alt="Profile" 
          />
        </div>
        
        <div className="absolute left-0 bottom-20 md:bottom-32 w-full">
          <RunningText items={runningTextItems} />
        </div>
        
        <button 
          className={`absolute right-4 md:right-8 top-1/3 transition-all duration-500 cursor-pointer ${
            expanded ? 'w-72 md:w-96' : 'w-24 md:w-28'
          } h-20 md:h-24 bg-neutral-950 rounded-tl-[40px] rounded-bl-[40px] md:rounded-tl-[64px] md:rounded-bl-[64px] flex items-center justify-end pr-4`}
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Collapse greeting" : "Expand greeting"}
        >
          {expanded ? (
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-white text-xl md:text-2xl lg:text-4xl font-medium font-poppins">Hi I'm Adho</span>
              <span className="text-black text-4xl md:text-5xl lg:text-6xl">👋</span>
            </div>
          ) : (
            <span className="text-black text-4xl md:text-5xl lg:text-6xl">👋</span>
          )}
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <h2 className="text-neutral-950 text-3xl md:text-4xl font-medium font-poppins mb-6 md:mb-8">About</h2>
        <p className="text-neutral-700 text-xl md:text-2xl font-normal font-poppins leading-8 md:leading-9">
          I'm a Data Science undergraduate passionate about building efficient data systems. With a strong interest in data engineering and database architecture, I thrive on turning complex data into structured, scalable solutions. Alongside my studies, I work as a freelance class facilitator, combining technical knowledge with strong communication skills.
        </p>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <h2 className="text-neutral-950 text-3xl md:text-4xl font-medium font-poppins mb-6 md:mb-8">Recent Work</h2>
        
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
            <div className="flex-1">
              <h3 className="text-neutral-950 text-4xl md:text-5xl lg:text-6xl font-normal font-inter">Cakrawala University</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-neutral-700 text-base md:text-lg font-normal font-poppins">Student</span>
                <span className="w-0 h-2 origin-top-left -rotate-90 opacity-80 bg-neutral-700"></span>
                <span className="text-neutral-700 text-base md:text-lg font-normal font-poppins">Facilitator</span>
              </div>
            </div>
            <button className="p-3 md:p-4 opacity-80 rounded-full border border-neutral-700 hover:opacity-100 transition-opacity">
              <div className="w-5 h-5 md:w-6 md:h-6 relative transform -rotate-45">
                <div className="absolute inset-0 bg-neutral-700"></div>
              </div>
            </button>
          </div>
          <div className="w-full h-px bg-neutral-300 mb-6 md:mb-8"></div>
          <div className="w-full h-px bg-neutral-300 mb-6 md:mb-8"></div>
          <div className="w-full h-px bg-neutral-300"></div>
        </div>
        
        <div className="my-12 md:my-16">
          <HorizontalScroll items={workItems} direction="left" />
        </div>
        <div className="my-12 md:my-16">
          <HorizontalScroll items={workItems} direction="right" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <h2 className="text-neutral-950 text-3xl md:text-4xl font-medium font-poppins mb-6 md:mb-8">Testimonials</h2>
        
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-5 md:gap-7">
            <blockquote className="text-neutral-700 text-xl md:text-2xl font-normal font-poppins leading-8 md:leading-9">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </blockquote>
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 md:w-16 md:h-16 rounded-full" src="https://placehold.co/64x64" alt="Ayush Raj" />
              <div className="flex flex-col">
                <span className="text-neutral-950 text-base md:text-lg font-medium font-poppins">Ayush Raj</span>
                <span className="text-neutral-950 text-xs md:text-sm font-normal font-poppins">VP of Marketing @ Webflow</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-5 md:gap-7">
            <blockquote className="text-neutral-700 text-xl md:text-2xl font-normal font-poppins leading-8 md:leading-9">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </blockquote>
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 md:w-16 md:h-16 rounded-full" src="https://placehold.co/64x64" alt="Alex Cattoni" />
              <div className="flex flex-col">
                <span className="text-neutral-950 text-base md:text-lg font-medium font-poppins">Alex Cattoni</span>
                <span className="text-neutral-950 text-xs md:text-sm font-normal font-poppins">Founder @ CopyPossy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium font-poppins mb-4">
            Have something in mind?
          </h2>
          <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium font-poppins mb-8">
            Let's build it together.
          </h3>
          <button 
            className="px-8 py-4 md:px-12 md:py-6 bg-white rounded-full hover:bg-green-200 transition-colors"
            onClick={handleContactClick}
          >
            <span className="text-neutral-950 text-lg font-medium font-poppins">Get in touch</span>
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-green-200">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <img 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full mx-auto lg:mx-0 mb-8" 
              src="https://placehold.co/297x297" 
              alt="Profile" 
            />
            
            <div className="mb-8 md:mb-12">
              <h3 className="text-neutral-700 text-lg font-normal font-poppins mb-2 md:mb-3">Contact Details</h3>
              <div className="flex flex-col gap-1 md:gap-2">
                <a href="mailto:muhammad.abdullah@cakrawala.ac.id" className="text-neutral-950 text-xl md:text-2xl font-normal font-poppins hover:text-green-600 transition-colors">
                  muhammad.abdullah@cakrawala.ac.id
                </a>
                <a href="tel:+6285157377289" className="text-neutral-950 text-xl md:text-2xl font-normal font-poppins hover:text-green-600 transition-colors">
                  +62 851 5737 7289
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-neutral-700 text-lg font-normal font-poppins mb-2 md:mb-3">Social</h3>
              <div className="flex flex-col gap-1 md:gap-2">
                <a href="#" className="text-neutral-950 text-xl md:text-2xl font-normal font-poppins hover:text-green-600 transition-colors">Linkedin</a>
                <a href="#" className="text-neutral-950 text-xl md:text-2xl font-normal font-poppins hover:text-green-600 transition-colors">Instagram</a>
                <a href="#" className="text-neutral-950 text-xl md:text-2xl font-normal font-poppins hover:text-green-600 transition-colors">Twitter</a>
                <a href="#" className="text-neutral-950 text-xl md:text-2xl font-normal font-poppins hover:text-green-600 transition-colors">Webflow</a>
                <a href="#" className="text-neutral-950 text-xl md:text-2xl font-normal font-poppins hover:text-green-600 transition-colors">Figma</a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-neutral-950 text-4xl md:text-5xl lg:text-6xl font-medium font-poppins mb-6 md:mb-8">
              Let's build something cool together
            </h2>
            
            <form className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-3">
                <label htmlFor="name" className="text-neutral-950 text-lg font-normal font-poppins">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  defaultValue="Muhammad Abdullah"
                  className="opacity-60 text-neutral-700 text-xl md:text-2xl font-normal font-poppins bg-transparent border-b border-neutral-700 pb-2 focus:outline-none focus:border-green-600"
                />
              </div>
              
              <div className="flex flex-col gap-2 md:gap-3">
                <label htmlFor="email" className="text-neutral-950 text-lg font-normal font-poppins">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  defaultValue="muhammad.abdullah@cakrawala.ac.id"
                  className="opacity-60 text-neutral-700 text-xl md:text-2xl font-normal font-poppins bg-transparent border-b border-neutral-700 pb-2 focus:outline-none focus:border-green-600"
                />
              </div>
              
              <div className="flex flex-col gap-2 md:gap-3">
                <label htmlFor="subject" className="text-neutral-950 text-lg font-normal font-poppins">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  defaultValue="For work Enquire"
                  className="opacity-60 text-neutral-700 text-xl md:text-2xl font-normal font-poppins bg-transparent border-b border-neutral-700 pb-2 focus:outline-none focus:border-green-600"
                />
              </div>
              
              <div className="flex flex-col gap-2 md:gap-3">
                <label htmlFor="message" className="text-neutral-950 text-lg font-normal font-poppins">Message</label>
                <textarea 
                  id="message" 
                  defaultValue="Type your Message"
                  rows="4"
                  className="opacity-60 text-neutral-700 text-xl md:text-2xl font-normal font-poppins bg-transparent border-b border-neutral-700 pb-2 focus:outline-none focus:border-green-600 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-48 px-8 py-4 md:px-12 md:py-6 bg-neutral-950 rounded-full hover:bg-neutral-800 transition-colors"
              >
                <span className="text-green-200 text-lg font-medium font-poppins">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-neutral-950">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-base md:text-lg font-normal font-poppins">
            Build with 💖 by Brightscout & Ayush
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-green-200 text-base md:text-lg font-normal font-poppins hover:underline">Linkedin</a>
            <a href="#" className="text-slate-300 text-base md:text-lg font-normal font-poppins hover:underline">Twitter</a>
            <a href="#" className="text-slate-300 text-base md:text-lg font-normal font-poppins hover:underline">Instagram</a>
            <a href="#" className="text-slate-300 text-base md:text-lg font-normal font-poppins hover:underline">Webflow</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
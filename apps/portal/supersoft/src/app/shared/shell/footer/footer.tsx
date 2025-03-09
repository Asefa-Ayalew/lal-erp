"use client";

import { IconHexagonLetterS } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="mt-24 px-6 py-12 bg-primary-600 dark:bg-gray-900 border-t border-white shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* Logo Section */}
          <div className="max-w-xl text-justify justify sm:text-left">
            <div className="flex space-x-2">
              {/* Animated Icon */}
              <IconHexagonLetterS
                size={40}
                className="text-white transition-transform duration-300 hover:rotate-12 mt-1"
              />

              {/* Stylish Text */}
              <h1 className="text-4xl tracking-wide text-white bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 transition-all duration-500 font-extrabold">
                Supersoft
              </h1>
            </div>
            <p className="text-white mt-2 text-md">
              We specialize in building innovative, scalable, and
              high-performance software solutions tailored to meet business
              needs. With expertise in modern web and mobile technologies, we
              help businesses streamline operations, enhance user experiences,
              and drive digital transformation. Our team of experienced
              developers and designers is dedicated to delivering high-quality,
              secure, and future-ready applications. Whether it's enterprise
              solutions, SaaS platforms, or custom software development, we turn
              ideas into realit
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-white">
          <p>
            © {new Date().getFullYear()} Supersoft. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-blue-500 transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

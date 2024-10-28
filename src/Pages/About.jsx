import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Profile from '../assets/images/profile.jpeg';
import { DotLoader } from "react-spinners";

const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <DotLoader color="#10B981" size={60} />
            </div>
        );
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full mx-4 p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-4 animate-fadeIn">About the Creator</h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6 animate-slideIn">
          Hello! I’m Ilham Dika, a passionate web developer with a strong focus on creating intuitive and user-friendly digital experiences. My mission is to bring creative ideas to life through technology, always aiming for high-quality and impactful results.
        </p>

        <div className="flex flex-col md:flex-row justify-around items-center mt-6 animate-fadeIn delay-300">
          <img
            src={Profile}
            alt="Creator"
            className="w-40 h-40 rounded-full mb-4 md:mb-0 ring-4 ring-blue-300 dark:ring-gray-700 transition-transform transform hover:scale-110 duration-300"
          />
          <div className="text-gray-600 dark:text-gray-300">
            <h3 className="text-2xl font-semibold mb-2">Skills & Expertise</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Frontend Development (React, Tailwind CSS)</li>
              <li>Backend Development (Laravel, Node.js)</li>
              <li>Database Management (MySQL, MongoDB)</li>
              <li>API Integration & Development</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center animate-fadeIn delay-500">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Want to collaborate? Feel free to reach out:
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:your.email@example.com" className="text-blue-500 dark:text-blue-400 text-2xl transition-transform transform hover:scale-110 duration-300">
              <FaEnvelope />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-400 text-2xl transition-transform transform hover:scale-110 duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 text-2xl transition-transform transform hover:scale-110 duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

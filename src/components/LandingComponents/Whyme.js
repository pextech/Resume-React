/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import whyme from '../../images/me.png';
import github from '../../images/githubb.png';
import email from '../../images/envelope.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';

function Whyme() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-gray-800">
      {' '}
      <div className="bg-primary-200 flex flex-row justify-center mt-6 pl-4 pb-6 pr-4">
        <div className="">
          {/* right side */}
          <img src={whyme} className="w-full h-full me scale-110 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-80 ... z-30" alt="sketch" />
        </div>
        <div className="me-text" data-aos="fade-left">
          <p className="text-gray-100">
            Why
          </p>
          <span
            className="text-primary-100"
          >
            Me?
          </span>
          <div className="hide">
            <h6 className="text-gray-200 font-light  mt-2 w-11/12">
              As a Software Engineer I designs and develops software applications. Performs coding, debugging, testing and troubleshooting throughout the application development process, it indeed my job to put myself out of business. What I do today can be automated tomorrow.
            </h6>
            <div className="flex flex-row mt-10 p-5">
              {/* social media */}
              <a href="https://github.com/pextech" target="_blank"><img src={github} alt="about me" className="w-6 h-6  mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
              <a href="mailto:mcstain1639@gmail.com" target="_blank"><img src={email} alt="about me" className="w-6 h-6  mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
              <a href="https://www.linkedin.com/in/mupenzi-cedrick-10a158196" target="_blank"><img src={linkedin} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
              <a href="https://web.facebook.com/profile.php?id=100008597651836" target="_blank"><img src={facebook} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
              <a href="https://twitter.com" target="_blank"><img src={twitter} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ... hover:shadow-xl" /></a>
            </div>
            <div className=" mr-0 mt-10">
              {/* button */}
              <button className="h-12 w-1/2 rounded-sm text-white border-3 border-gray-700 hover:bg-gray-200 hover:text-gray-600 hover:border-gray-200 bg-gray-700 xl:ml-10 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." attribute="contact" type="button">Send me a query</button>
            </div>
          </div>

        </div>
      </div>
      <div className="show text-gray-200 font-light p-10 ">
        <h6 className="text-white font-light  mt-5">
          As a Software Engineer I designs and develops software applications. Performs coding, debugging, testing and troubleshooting throughout the application development process, it indeed my job to put myself out of business. What I do today can be automated tomorrow.
        </h6>
        <div className="flex flex-row mt-10 justify-center">
          {/* social media */}
          <a href="https://github.com/pextech" target="_blank"><img src={github} alt="about me" className="w-6 h-6  mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="mailto:mcstain1639@gmail.com" target="_blank"><img src={email} alt="about me" className="w-6 h-6  mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://www.linkedin.com/in/mupenzi-cedrick-10a158196" target="_blank"><img src={linkedin} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://web.facebook.com/profile.php?id=100008597651836" target="_blank"><img src={facebook} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://twitter.com" target="_blank"><img src={twitter} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ... hover:shadow-xl" /></a>
        </div>
        <div className=" mr-0 mt-10 flex flex-row justify-center">
          {/* button */}
          <button className="h-12 w-1/2 rounded-sm text-white border-3 border-gray-700 bg-gray-700 xl:ml-10 ml-2 hover:bg-gray-200 hover:border-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." attribute="contact" type="button">Send me a query</button>
        </div>
      </div>

    </div>

  );
}

export default Whyme;

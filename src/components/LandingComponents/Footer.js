/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import github from '../../images/githubc.png';
import email from '../../images/emailc.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedinc.png';
import twitter from '../../images/twitter.png';
import copyright from '../../images/copyright.png';

function Footer() {
  return (
    <div className="flex flex-row justify-around bg-black py-10">
      <div className="flex flex-row  p-4 justify-start">
        {/* social media */}
        <p className="text-gray-300 mr-5">Follow me on</p>
        <div className="flex flex-row bg-black p-1 justify-start">
          <a href="https://github.com/pextech" target="_blank"><img src={github} alt="about me" className="w-4 h-4  mr-3 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="mailto:mcstain1639@gmail.com" target="_blank"><img src={email} alt="about me" className="w-4 h-4  mr-3 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://www.linkedin.com/in/mupenzi-cedrick-10a158196" target="_blank"><img src={linkedin} alt="about me" className="w-4 h-4 mr-3 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://web.facebook.com/profile.php?id=100008597651836" target="_blank"><img src={facebook} alt="about me" className="w-4 h-4 mr-3 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://twitter.com" target="_blank"><img src={twitter} alt="about me" className="w-4 h-4 mr-3 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ... hover:shadow-xl" /></a>
        </div>

      </div>
      <div className="flex flex-row ">
        <p className="text-gray-300 p-4 w-full flex flex-row ">
          Copyright
          <img
            src={copyright}
            alt="copyright"
            className="w-4 h-4 mx-2 mt-1 transition duration-500 ease-in-out
         transform hover:-translate-y-3 hover:scale-110 ... hover:shadow-xl"
          />
          2021
          {' '}
        </p>
      </div>
    </div>

  );
}

export default Footer;

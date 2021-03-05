/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import UI from '../../images/uiux.svg';
import Web from '../../images/web.svg';
import ios from '../../images/ios.svg';
import discover from '../../images/discovery.svg';

function Service() {
  return (
    <div className="bg-gray-100 serviceBox m-0 justify-between mt-10 z-30">
      <div className="serviceBoxText">
        {/* left intro side */}
        <p className="text-gray-800 font-bold text-3xl ml-3">Services that i offer! 😃</p>
        <p className="p-4 mt-10 font-light text-gray-600">
          Discover My very high-quality and finest end-to-end services waiting you, Both Web
          and Mobile applications Designed using UI & UX best practices.❤️‍🔥 with love
        </p>
        <p className="p-4 mt-5 font-light text-gray-600">
          I love to dig into my customers needs and propose technological solutions notably through software development , As a certified software Engineer and a natural problem solver I prioritize my customers satisfaction by focusing on the desired end result.
          In the Proffesional career that I have carried and enjoying this far, as a Software Engineer, developer, task manager, team manager, User Interface designer, graphic designer have thought me Alot about myself both professionally and personally.
        </p>
        <p className="p-4 mt-5 font-light text-gray-600">
          I have been lucky to have worked with companies and individuals in various industries from e-commerce, advertising, healthcare to tours and travel where I did independent projects and also led teams to deliver highly scalable and performant solutions.

          I am always ready to pick up something new. 😋
        </p>
        <Link to="/">
          <button className="h-12 w-1/2 flex flex-row justify-center p-3 rounded-sm mt-5 text-white border-3 border-gray-700 bg-gray-700 xl:ml-10 ml-2 hover:bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." attribute="contact" type="button">
            Portfolio
            <svg className="arrow w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </Link>

      </div>
      <div className="flex flex-col w-full text-center serviceBoxContainer">
        {/* right side */}
        <div className="flex flex-row small">
          <div className="bg-white shadow-md text-center hold flex flex-col hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ...">
            <img src={UI} alt="UI/UX" className="m-10" />
            <p className="text-center mb-20">UI & UX (Design)</p>
          </div>
          <div className="bg-gray-50 flex flex-col text-center hold hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ...">
            <img src={ios} alt="mobile" className="m-10 " />
            <p className="text-center mb-20">Mobile Applications</p>
          </div>
        </div>
        <div className="flex lex-row small">
          <div className="bg-gray-50 flex flex-col text-center hold hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ...">
            <img src={Web} alt="web" className="m-10 " />
            <p className="text-center mb-20">Web Applications (websites)</p>
          </div>
          <div className="bg-white shadow-md text-center hold flex flex-col hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ...">
            <img src={discover} alt="Discovery" className="m-10" />
            <p className="text-center mb-20">Project discovery</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Service;

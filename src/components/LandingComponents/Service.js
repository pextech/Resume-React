import React from 'react';
import { Link } from 'react-router-dom';
import UI from '../../images/uiux.svg';
import Web from '../../images/web.svg';
import ios from '../../images/ios.svg';
import discover from '../../images/discovery.svg';

function Service() {
  return (
    <div className="bg-gray-100 serviceBox  p-5 m-0 justify-between ">
      <div className="text-center serviceBoxText">
        {/* left intro side */}
        <h2 className="text-gray-800 font-bold text-7xl">SERVICES I OFFER</h2>
        <p className="text-center w-1/3 mt-10 text-gray-700">
          Discover My very high-quality and finest end-to-end services waiting you, Both Web
          Mobile application Designed using UI/UX best practices.❤️‍🔥 - with love -
        </p>
        <Link to="/">
          <button type="button" className="mt-10 text-2xl rounded-md learn text-white border-gray-700 bg-gray-700  hover:bg-gray-800">Learn More</button>
        </Link>

      </div>
      <div className="flex flex-col w-11/12 text-center serviceBoxContainer">
        {/* right side */}
        <div className="flex flex-row small">
          <div className="bg-white shadow-md text-center hold flex flex-col">
            <img src={UI} alt="UI/UX" className="w-1/2 m-40 xs:mr-28 xs:m-28 xs:pr-8" />
            <p className="text-2xl text-center mb-20 xs:mb-10">UI & UX (Design)</p>
          </div>
          <div className=" flex flex-col text-center hold ">
            <img src={ios} alt="mobile" className="w-1/2 m-40  xs:mr-28 xs:m-28 xs:pr-8" />
            <p className="text-2xl text-center mb-20">Mobile Applications</p>
          </div>
        </div>
        <div className="flex flex-row small">
          <div className=" flex flex-col text-center hold ">
            <img src={Web} alt="web" className="w-1/2  m-40  xs:mr-28 xs:m-28 xs:pr-8" />
            <p className="text-2xl text-center mb-20">Web Applications (websites)</p>
          </div>
          <div className="bg-white shadow-md text-center hold flex flex-col">
            <img src={discover} alt="Discovery" className="w-1/2 m-40  xs:mr-28 xs:m-28 xs:pr-8" />
            <p className="text-2xl text-center mb-20">Project discovery</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Service;

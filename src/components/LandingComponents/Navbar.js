/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo3.png';
import Dropdown from './Dropdown';

function Navbar() {
  // const [isOpen, setisOpen] = React.useState(false);

  // function handleClick() {
  //   setisOpen(!isOpen);
  // }
  return (
    <div className="flex flex-row justify-between bg-white shadow-lg p-5 sticky top-0 ...">
      <div className="flex flex-row justify-between">
        <div>
          {/* left logo side */}
          <Link to="/"><img src={logo} alt="logo" className="w-20 h-20 ml-12" /></Link>
        </div>
        <div className="hidden cursor-pointer px-4 show humbergur">
          <Dropdown />
        </div>

        {/* <div className="hidden cursor-pointer px-4 show humbergur m-5" id="burger" onClick={handleClick}>
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div> */}
      </div>
      <div className="flex flex-row mr-11 hide xmd:hidden xs:flex-col xsm:flex-col">
        {/* right nav side */}
        <ul className="flex flex-row navbar xs:flex-col xsm:flex-col">
          <Link to="/"><li className="active hover:text-primary-100 text-gray-800 m-4 text-xl p-4">Home</li></Link>
          <Link to="/"><li className="text-gray-800 hover:text-primary-100 m-4 text-xl p-4">About</li></Link>
          <Link to="/"><li className="text-gray-800 hover:text-primary-100 m-4 text-xl p-4">Service</li></Link>
          <Link to="/"><li className="text-gray-800  hover:text-primary-100 m-4 text-xl p-4">Portfolio</li></Link>
          <Link to="/"><li className="text-gray-800  hover:text-primary-100 m-4 text-xl p-4">Contact</li></Link>
          <Link to="/"><li className="text-gray-800 hover:text-primary-100 m-4 text-xl p-4">Blog</li></Link>
          <button type="button" className="p-5 text-2xl mt-1 login rounded-md text-white border-gray-700 bg-gray-700  hover:bg-gray-800">Login</button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

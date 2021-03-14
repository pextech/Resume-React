/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { ScrollTo } from 'react-scroll-to';
import {
  Element, Events, animateScroll as scroll, scrollSpy, scroller,
  Link as linkS,
} from 'react-scroll';

import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png';
import Dropdown from './Dropdown';
import NavItems from './NavItems';

function Navbar() {
  // const [isOpen, setisOpen] = React.useState(false);

  // function handleClick() {
  //   setisOpen(!isOpen);
  // }

  const changeNav = () => {

  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="flex flex-row justify-between bg-white shadow-lg p-2 sticky top-0 ... z-40">
      <div className="flex flex-row justify-between">
        <div>
          {/* left logo side */}
          <Link to="/" onClick={toggleHome}><img src={logo} alt="logo" className="w-20 h-20 ml-10" /></Link>
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
        <NavItems />
      </div>
    </div>
  );
}

export default Navbar;

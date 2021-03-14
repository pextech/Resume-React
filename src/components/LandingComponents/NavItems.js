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

function NavItems() {
  const changeNav = () => {

  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const toggleContact = () => {
    scroll.scrollToBottom();
  };
  return (
    <>
      <ul className="flex flex-row navbar xs:flex-col xsm:flex-col font-light">
        <Link to="/" onClick={toggleHome} spy="true" smooth="true" offset={50} duration={500}><li className="active hover:text-primary-100 text-gray-800 m-4 text-md p-4">Home</li></Link>
        <ScrollTo>
          {({ scroll }) => (
            <Link onClick={() => scroll({ x: 20, y: 750, smooth: true })} to="about" spy="true" smooth="true" offset={50} duration={500}><li className="text-gray-800 hover:text-primary-100 m-4 text-md p-4">About</li></Link>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <Link onClick={() => scroll({ x: 20, y: 1500, smooth: true })} to="portfolio" spy="true" smooth="true" offset={50} duration={500}><li className="text-gray-800  hover:text-primary-100 m-4 text-md p-4">Portfolio</li></Link>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <Link onClick={() => scroll({ x: 20, y: 2750, smooth: true })} to="service" spy="true" smooth="true" offset={50} duration={500}><li className="text-gray-800  hover:text-primary-100 m-4 text-md p-4">Services</li></Link>
          )}
        </ScrollTo>
        <Link onClick={toggleContact} to="contact" spy="true" smooth="true" offset={50} duration={500}><li className="text-gray-800  hover:text-primary-100 m-4 text-md p-4">Contact</li></Link>
        <Link to="/blog"><li className="text-gray-800 hover:text-primary-100 m-4 text-md p-4">Blog</li></Link>
        <button type="button" className="p-2 text-md mt-6 login  text-white border-gray-900 bg-primary-200  hover:bg-black hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">Login</button>
      </ul>
    </>
  );
}

export default NavItems;

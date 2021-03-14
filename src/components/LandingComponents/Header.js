/* eslint-disable no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import AOS from 'aos';
import * as Scroll from 'react-scroll';
import { ScrollTo } from 'react-scroll-to';
import 'aos/dist/aos.css';
import {
  Element, Events, animateScroll as scroll, scrollSpy, scroller,
  Link as linkS,
} from 'react-scroll';
import pextech from '../../images/logo2.png';
import editor from '../../images/stage2_phn.png';
import textEdit from '../../images/screen_editor.svg';
// import LandingSkeleton from '../skeletons/LandingSkeleton';

function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const toggleContact = () => {
    scroll.scrollToBottom();
  };

  return (
    <>
      {/* {loading && <LandingSkeleton />} */}

      <div className="flex flex-row shadow-md pl-12 sm:pl-0 xs:pl-0 xsm:pl-0 justify-between header" id="home">
        <div className="moff xs:m-4 xs:p-0  xsm:p-0 sm:p-4 sm:m-4 xsm:m-4">
          {/* left side */}
          <div className="mx-10 moff xs:m-10 sm:m-4 xsm:m-4">
            {/* Logo or Picture */}
            <img
              src={pextech}
              alt="pextech logo"
              data-aos="flip-left"
              className=" w-full h-full
            rounded-full xl:w-80 xl:h-80  xs:w-full xs:ml-0 xs:h-1/2"
            />
          </div>
          <div className=" w-full mb-5">
            <div>
              {/* cool text here */}
              <h1 className="text-5xl text-gray-200 ml-20 px-12 py-0 xs:ml-4 sm:p-4 xsm:p-4 xs:p-4 " data-aos="fade-up">
                Breathing
                <br />
                {' '}
                life
                <br />
                {' '}
                into Code
              </h1>
            </div>
            <div data-aos="fade-up" className="xs:mb-20 xs:mt-10 flex md:flex-row xs:flex-col xsm:flex-col justify-evenly ml-20 xs:p-0 xsm:p-0 sm:p-0 sm:m-4 xsm:m-4 xs:ml-4">
              {/* buttons here */}
              <button onClick={toggleContact} className=" btn rounded-sm text-white border-3 border-gray-700 bg-gray-700 xl:ml-10 ml-2 hover:bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." attribute="contact" type="button">
                let's
                {' '}
                sync
              </button>
              <ScrollTo>
                {({ scroll }) => (
                  <button onClick={() => scroll({ x: 20, y: 1500, smooth: true })} className=" btn rounded-sm text-white border-2 border-white sm:w-full xs:w-full ml-2 hover:bg-white hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." attribute="portfolio" type="button">Porfolio</button>
                )}
              </ScrollTo>
            </div>
          </div>
        </div>
        <div className="xs:mb-10 mt-10 hide" data-aos="fade-down">
          {/* righ side */}

          <img src={textEdit} alt="editor" className="md:block xl:block srcn_edit w-11/12 sm:hidden xs:hidden" />
          <img src={editor} alt="editor" className="md:block xl:block srcn_edit w-1/2 h-1/3 sm:hidden xs:hidden" />

        </div>
      </div>
    </>

  );
}

export default Header;

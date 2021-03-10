/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pextech from '../../images/pextech.png';
import editor from '../../images/stage2_phn.png';
import textEdit from '../../images/screen_editor.svg';
// import LandingSkeleton from '../skeletons/LandingSkeleton';

function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* {loading && <LandingSkeleton />} */}

      <div className="flex flex-row shadow-md pl-12 sm:pl-0 xs:pl-0 xsm:pl-0 justify-between header" id="home">
        <div className="m-10 moff p-10 xs:m-4 xs:p-0 xsm:p-0 sm:p-4 sm:m-4 xsm:m-4">
          {/* left side */}
          <div className="m-10 moff xs:m-10 sm:m-4 xsm:m-4">
            {/* Logo or Picture */}
            <img src={pextech} alt="pextech logo" data-aos="fade-up" className="rounded-full rounded-t-none xl:w-80 xl:h-80 ml-10 xs:w-full xs:ml-0 xs:h-1/2" />
          </div>
          <div>
            <div>
              {/* cool text here */}
              <h1 className="text-5xl text-primary-100 ml-40 p-12 xs:ml-4 sm:p-4 xsm:p-4 xs:p-4 " data-aos="fade-up">
                Breathing
                <br />
                {' '}
                life
                <br />
                {' '}
                into Code
              </h1>
            </div>
            <div data-aos="fade-up" className="xs:mb-20 xs:mt-10 flex md:flex-row xs:flex-col xsm:flex-col justify-evenly ml-12 xs:p-0 xsm:p-0 sm:p-0 sm:m-4 xsm:m-4 xs:ml-4">
              {/* buttons here */}
              <button className="h-12 w-1/2 btn rounded-sm text-white border-3 border-gray-700 bg-gray-700 xl:ml-10 ml-2 hover:bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." attribute="contact" type="button">
                let's
                {' '}
                sync
              </button>
              <button className="h-12 w-1/2 btn rounded-sm text-white border-2 border-white sm:w-full xs:w-full ml-2 hover:bg-white hover:text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." attribute="portfolio" type="button">Porfolio</button>
            </div>
          </div>
        </div>
        <div className="xs:mb-10 mt-10 hide" data-aos="fade-down">
          {/* righ side */}

          <img src={textEdit} alt="editor" className="md:block xl:block srcn_edit w-full sm:hidden xs:hidden" />
          <img src={editor} alt="editor" className="md:block xl:block srcn_edit w-1/2 sm:hidden xs:hidden" />

        </div>
      </div>
    </>

  );
}

export default Header;

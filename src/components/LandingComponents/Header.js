import React from 'react';
import logo from '../../images/logo3.png';
import editor from '../../images/stage2_phn.png';
import textEdit from '../../images/screen_editor.svg';
// import LandingSkeleton from '../skeletons/LandingSkeleton';

function Header() {
  return (
    <>
      {/* {loading && <LandingSkeleton />} */}

      <div className="flex flex-row shadow-md pl-12 sm:pl-0 xs:pl-0 xsm:pl-0 justify-between">
        <div className="m-10 p-10 xs:m-4 xs:p-0 xsm:p-0 sm:p-4 sm:m-4 xsm:m-4">
          {/* left side */}
          <div className="m-10 xs:m-10 sm:m-4 xsm:m-4">
            {/* Logo or Picture */}
            <img src={logo} alt="pextech logo" className="logo xl:w-80 xl:h-80 ml-12 xs:w-full xs:ml-0 xs:h-1/2" />
          </div>
          <div>
            <div>
              {/* cool text here */}
              <h1 className="intro text-5xl text-primary-100 ml-40 p-12 xs:ml-4 sm:p-4 xsm:p-4 xs:p-4 ">
                Breathing
                <br />
                {' '}
                life
                <br />
                {' '}
                into Code
              </h1>
            </div>
            <div className="xs:mb-20 xs:mt-10 flex md:flex-row xs:flex-col xsm:flex-col justify-evenly ml-12 xs:p-0 xsm:p-0 sm:p-0 sm:m-4 xsm:m-4 xs:ml-4">
              {/* buttons here */}
              <button className="btn rounded-md text-white border-black bg-black xl:h-12 xl:w-1/2 md:w-1/2 xl:ml-10 md:ml-10 sm:ml-0 xsm:ml-0 hover:bg-gray-800" attribute="contact" type="button">Contact Me</button>
              <button className="btn rounded-md text-white border-2 border-white xl:h-12 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full ml-2  hover:bg-white hover:text-gray-800 " attribute="portfolio" type="button">Porfolio</button>
            </div>
          </div>
        </div>
        <div className="editor xs:mb-10">
          {/* righ side */}

          <img src={textEdit} alt="editor" className="md:block xl:block srcn_edit w-full m-3 sm:hidden xs:hidden mr-4" />
          <img src={editor} alt="editor" className="md:block xl:block srcn_edit w-1/2 m-3 sm:hidden xs:hidden" />

        </div>
      </div>
    </>

  );
}

export default Header;

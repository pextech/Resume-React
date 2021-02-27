import React from 'react';
import logo from '../../images/logo3.png';
import editor from '../../images/screen_editor.svg';
import product from '../../images/stage3_phn.png';

function Header() {
  return (
    <div className="flex flex-row shadow-md pl-12 justify-between">
      <div className="m-10 p-10 ">
        {/* left side */}
        <div className="m-10">
          {/* Logo or Picture */}
          <img src={logo} alt="pextech logo" className="w-80 h-80 ml-12" />
        </div>
        <div>
          <div>
            {/* cool text here */}
            <h1 className="text-5xl text-primary-100 ml-12 p-12 ">
              Breathing life
              <br />
              {' '}
              into Code
            </h1>
          </div>
          <div className="flex flex-row justify-evenly m-12">
            {/* buttons here */}
            <button className="rounded-md text-1xl  text-white border-black bg-black h-12 w-1/2 ml-10" attribute="contact" type="button">Contact Me</button>
            <button className="rounded-md text-white border border-white h-12 w-1/2 ml-2" attribute="portfolio" type="button">Porfolio</button>
          </div>
        </div>
      </div>
      <div>
        {/* righ side */}
        <img src={editor} alt="editor" className="srcn_edit w-1/2" />
        <img src={product} alt="product" className="srcn_edit w-1/2" />
      </div>
    </div>
  );
}

export default Header;

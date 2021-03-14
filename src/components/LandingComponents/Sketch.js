import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import sketch from '../../images/stage2_phn.png';
import final from '../../images/stage3_phn.png';

function Sketch() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="portfolio">
      <div className="bg-primary-200 flex flex-row justify-between p-10 sticky top-0 ... z-20">
        <div className="">
          {/* right side */}
          <img src={sketch} data-aos="zoom-in" className="w-11/12 h-full transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." alt="sketch" />
        </div>
        <div className="sketch-text" data-aos="fade-up">
          <p className="text-gray-100">
            From just
          </p>
          <span
            className="text-primary-100"
          >
            sketches,
          </span>
        </div>
      </div>

      <div className="bg-primary-200 flex flex-row justify-between p-10 sticky top-0 ... z-30">
        <div className="">
          {/* right side */}
          <img src={final} data-aos="zoom-in" className="w-11/12 h-full transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." alt="sketch" />
        </div>
        <div className="sketch-text" data-aos="fade-up">
          <p className="text-gray-100">
            To Final
          </p>
          <span
            className="text-primary-100"
          >
            Product.
          </span>
          <div className="">
            <Link to="works" className="flex flex-row my-work">
              <h4 className="work">My work</h4>
              <svg className="arrow w-6 h-6 work ml-3 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Sketch;

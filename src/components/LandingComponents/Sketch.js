import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sketch from '../../images/stage2_phn.png';
import final from '../../images/stage3_phn.png';

function Sketch() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
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
        </div>
      </div>
    </div>

  );
}

export default Sketch;

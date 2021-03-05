import React from 'react';
import sketch from '../../images/stage2_phn.png';
import final from '../../images/stage3_phn.png';

function Sketch() {
  return (
    <div>
      <div className="bg-primary-200 flex flex-row justify-between p-10 sticky top-0 ... z-20">
        <div className="">
          {/* right side */}
          <img src={sketch} className="w-11/12 h-full transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." alt="sketch" />
        </div>
        <div className="sketch-text">
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
          <img src={final} className="w-11/12 h-full transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." alt="sketch" />
        </div>
        <div className="sketch-text">
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

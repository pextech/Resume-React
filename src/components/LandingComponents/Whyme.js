import React from 'react';
import whyme from '../../images/me.png';

function Whyme() {
  return (
    <div className="bg-primary-200 flex flex-row justify-center mt-6 pl-4 pb-6 pr-4 sticky top-0 ... z-20">
      <div className="">
        {/* right side */}
        <img src={whyme} className="w-full h-full me scale-110 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-80 ... z-30" alt="sketch" />
      </div>
      <div className="me-text">
        <p className="text-gray-100">
          Why
        </p>
        <span
          className="text-primary-100"
        >
          Me?
        </span>
      </div>
    </div>
  );
}

export default Whyme;

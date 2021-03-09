/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <svg
        type="button"
        style={{ transition: 'all .15s ease' }}
        onClick={() => setShowModal(true)}
        className="w-10 h-10 mt-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-10/12 my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="p-5 rounded-t">
                  <button
                    type="button"
                    className="p-1 ml-auto border-0 text-gray-700 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-gray-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <ul className="flex flex-col items-center navbar">
                    <Link to="/"><li className="active hover:text-primary-100 text-primary-100 m-4 text-2xl p-4 font-light">Home</li></Link>
                    <Link to="/"><li className="text-gray-800 hover:text-primary-100 m-4 text-2xl p-4 font-light">About</li></Link>
                    <Link to="/"><li className="text-gray-800 hover:text-primary-100 m-4 text-2xl p-4 font-light">Service</li></Link>
                    <Link to="/"><li className="text-gray-800  hover:text-primary-100 m-4 text-2xl p-4 font-light">Portfolio</li></Link>
                    <Link to="/"><li className="text-gray-800  hover:text-primary-100 m-4 text-2xl p-4 font-light">Contact</li></Link>
                    <Link to="/"><li className="text-gray-800 hover:text-primary-100 m-4 text-2xl p-4 font-light">Blog</li></Link>
                    <button type="button" className="p-5 w-10/12 text-2xl mt-1 rounded-md font-light text-white border-black bg-black  hover:bg-primary-200">Login</button>
                  </ul>
                </div>
                {/* footer */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}

/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Blogs({
  title, image, description, date,
}) {
  return (
    <div className="blogs flex flex-col w-5/12 bg-gray-100 rounded-md m-10 h-1/2">
      {/* blog section */}
      <div className="relative overflow-hidden shadow-xl h-full detail_container2">
        <img src={image} alt="future" className="w-full absolute detail_image2 transition-all duration-500 ease-in-out transform bg-center bg-cover hover:scale-150 h-full rounded-md rounded-b-none " />
      </div>
      <div className="date flex flex-row mt-4 ml-5">
        <svg className="w-6 h-6 font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p className="ml-4 font-light text-sm mt-1">{date}</p>
      </div>
      <div className="title ml-10 mt-4 font-semibold w-10/12 text-gray-700">
        <Link to="/blog/details"><p className="font-medium hover:font-bold">{title}</p></Link>
      </div>
      <div className="description ml-10 my-6 ">
        <p className="font-light hover:font-normal text-gray-700">
          {description}
        </p>
      </div>
      <div className="readmore ml-10 mb-10">
        <Link to="/blog/details">
          {' '}
          <button
            type="button"
            className="border border-gray-700 hover:bg-gray-700
       hover:text-gray-200 w-40 h-12 shadow-md rounded-md hover:shadow-2xl transition duration-500 ease-in-out
       transform hover:-translate-y-1 hover:scale-105 ..."
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Blogs;

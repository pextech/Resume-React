/* eslint-disable react/prop-types */
import React from 'react';

function Latest({
  title, image, date,
}) {
  return (
    <div className="latest__container flex flex-row my-10">
      <img alt="latest" src={image} className=" h-28 rounded-md hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..." width="100" />
      <div className="flex flex-col">
        <div className="date flex flex-row ml-5 text-primary-100">
          <svg className="w-6 h-6 font-light " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p className="ml-4 font-light text-sm mt-1">{date}</p>
        </div>
        <div className="title ml-10 mt-4 font-light text-gray-200 w-10/12">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Latest;

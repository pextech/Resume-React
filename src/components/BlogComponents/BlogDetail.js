/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function BlogDetail({
  title, image, description, date,
}) {
  return (
    <div className=" flex flex-col w-full bg-gray-100 rounded-md m-10">
      {/* blog section */}
      <img src={image} alt="future" className="w-full  rounded-md rounded-b-none " />
      <div className=" flex flex-row mt-4 ml-5">
        <svg className="w-6 h-6 font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p className="ml-4 font-light text-sm mt-1">{date}</p>
      </div>
      <div className=" ml-10 mt-4 font-semibold w-10/12 text-gray-700">
        <p className="font-medium hover:font-bold">{title}</p>
      </div>
      <div className="description ml-10 my-6 pr-5">
        <p className="font-light hover:font-normal text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BlogDetail;

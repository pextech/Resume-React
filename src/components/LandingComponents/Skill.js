/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Skill({ name, level, image }) {
  return (
    <div className="flex flex-row my-4 ml-5">
      <img src={image} className="w-1/4 h-1/6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." alt="react" />
      <div className="flex flex-col w-1/2 ">
        <span className="font-light text-gray-600 text-left">{name}</span>
        <div className="mt-8 bg-gray-200 rounded-full w-full h-3">
          <div style={{ width: level }} className="h-3 mt-0 bg-primary-100 py-1 rounded-full" />
        </div>
      </div>

    </div>
  );
}

export default Skill;

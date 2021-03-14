/* eslint-disable react/no-unescaped-entities */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import blogwritter from '../../images/blog.gif';

function Header() {
  return (
    <div className="flex flex-row justify-between p-10 blog mb-20">
      <div className="m-28 title">
        {/* title */}
        <p className="text-gray-600 text-5xl font-bold mb-4">
          What's New?
        </p>
        <span
          className="text-primary-100 text-5xl mt-4"
        >
          My Blog
        </span>
      </div>
      <div>
        {/* svg */}
        <img src={blogwritter} className="w-9/12 h-full" alt="writter" />
      </div>
    </div>
  );
}

export default Header;

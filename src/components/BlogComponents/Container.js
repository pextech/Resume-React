import React from 'react';
import Blogs from './Blogs';
import search from '../../images/search.png';
import Latest from './Latest';
import future from '../../images/future.jpg';
import Todo from '../../images/Todo.jpg';
import Avatar from '../../images/Avatar.png';
import Code from '../../images/Code.png';

function Container() {
  const title1 = 'Test: Virtual Coffee Chat';
  const title2 = 'Test: CS vs CIS: JMU Grad Panel';
  const title3 = 'Test: FAST Enterprises: Technical interview Workshop';
  const title4 = 'Test: JMU CISE Student Diversity Council & Mentorship Program';
  const description = 'Test: When someone shows you who they are, believe them believe them believe them';

  return (
    <div className="bg-primary-200 flex flex-row p-20 justify-center section-container h-full">
      {/* main section */}
      <div className="flex flex-row flex-wrap w-full blog-container">
        {/* blog containers */}
        <Blogs image={future} title={title1} description={description} date="March 19, 2020" />
        <Blogs image={Code} title={title2} description={description} date="March 12, 2021" />
        <Blogs image={Avatar} title={title3} description={description} date="March 18, 2021" />
        <Blogs image={Todo} title={title4} description={description} date="January 13, 2020" />
      </div>
      <div className="p-10 w-5/12 blog-side mb-36">
        {/* left side */}
        <div className="absolute w-1/5 search">
          <input type="text" placeholder="Search..." className="w-full  h-12 search rounded-md pl-10 inp text-gray-200" />
          <button type="button"><img src={search} alt="search" className="w-6 h-6 absolute right-2 top-3" /></button>
        </div>
        <div className="mainDiv mt-28">
          <p className="text-xl text-primary-100">Latest blogs</p>
          <div className="border-b-2 my-2 border-primary-100 w-20" />
        </div>
        <Latest image={future} title={title1} date="March 19, 2020" />
        <Latest image={Code} title={title2} date="March 12, 2021" />
        <Latest image={Avatar} title={title3} date="March 18, 2021" />
        <Latest image={Todo} title={title4} date="January 13, 2020" />

      </div>
    </div>

  );
}

export default Container;

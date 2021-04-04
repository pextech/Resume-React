/* eslint-disable max-len */
import React from 'react';
import search from '../../images/search.png';
import Latest from './Latest';
import future from '../../images/future.jpg';
import Todo from '../../images/Todo.jpg';
import Avatar from '../../images/Avatar.png';
import Code from '../../images/Code.png';
import BlogDetail from './BlogDetail';

function Details() {
  const title1 = 'Test: Virtual Coffee Chat';
  const title2 = 'Test: CS vs CIS: JMU Grad Panel';
  const title3 = 'Test: FAST Enterprises: Technical interview Workshop';
  const title4 = 'Test: JMU CISE Student Diversity Council & Mentorship Program';
  const description = 'Test: When someone shows you who  they are, believe them believe them believe them. Test Days. The event is scheduled to take place on April 13 and 14, 2021 and will be full of insights on high speed digital design and power electronics topics. A range of fascinating topics will be delivered free of charge through high quality presentations, technology knowledge, resources and application demos. Hosted from the digitalized version of the Rohde & Schwarz headquarters, the agenda comprises of live keynote sessions from leading industry and Rohde & Schwarz experts. The event also features a wide variety of topical subjects, available continuously on demand throughout each day in a virtual exhibition and educational area. Attendees will also have the opportunity to chat with Rohde & Schwarz experts and visit a virtual booth setup of application demos. The event is divided into two days: high speed digital design on April 13 and power electronics on April 14. Each day will run from 09:00 to 17:00 CET. High speed digital design topics include a look into the SIPI toolbox (signal integrity, power integrity) with new tools and why they matter. In addition, strategies for efficient and successful design, validation, debugging, compliance testing and certification will be presented. Power electronics topics include component evaluation and testing, switching analysis and converter design, batteries and BMS, and EMI debugging for power devices. The conference agenda includes keynote speakers to offer their expertise and answer audience questions, and both days launch with an introductory talk from a Rohde & Schwarz expert. The first day of the conference will begin with an initial keynote from Jim Drewniak, President of Clear Signal Solutions, who will deliver a talk on signal and power integrity in high speed digital design. The introductory keynote on the second day is titled: Silicon Carbide – The semiconductor material taking over high voltage power conversion, from Dr Chris Dries, President and CEO of United SiC. The timetable on both days includes breaks for visitors to take advantage of the virtual exhibition area.';
  return (
    <div className="bg-primary-200 flex flex-row p-20 justify-center section-container">
      {/* main section */}
      <div className="flex flex-row flex-wrap w-full blog-container">
        {/* blog containers */}
        <BlogDetail image={future} title={title1} description={description} date="March 19, 2020" />
      </div>
      <div className="p-10 w-5/12 blog-side">
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

export default Details;

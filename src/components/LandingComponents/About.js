/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import AOS from 'aos';
import ScrollAnimation from 'react-animate-on-scroll';
import aboutme from '../../images/aboutme.png';
import github from '../../images/github.png';
import email from '../../images/email.png';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebookb.png';
import linkedin from '../../images/linkedinb.png';
import twitter from '../../images/twitterb.png';
import whatsapp from '../../images/whatsapp.png';
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-gray-100 flex xl:flex-row xs:flex-col xmd:flex-col aboutContainer" id="about">
      <div className="xl:w-1/2 xs:w-full xmd:w-full">
        {/* left side */}
        <img src={aboutme} alt="about me" className="h-full w-full hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-x-5 hover:scale-80 ..." />
      </div>
      {' '}
      <ScrollAnimation animateIn="fadeIn" />
      <div className="w-1/2 p-20 xs:w-full about" data-aos="fade-up">
        {/* right side */}
        <div className="title font-light">
          {/* title */}
          <p className="text-4xl font-light">Who is Cedrick Mupenzi?</p>
          <p className="text-4xl font-light">Discover more</p>
        </div>
        <div className="mt-20 w-full description font-light text-gray-600 editor">
          {/* desscription */}

          <p>
            From educating and inspiring talented and hardworking young people on their track towards this carrier.
            Philosophically, I believe there are two roles to being a software engineer. First, the facilitator. Someone who helps everyone doing their best work together
            by creating a psychologically safe and involving environment to collaborate. Then, the developer. Someone who translates the team best working into a desirable, realistic, and measurable product. . I value honest conversations and progressive thinking, and I aim to create things that empower and inspire.
          </p>
          <p className="mt-10">
            Cedrick 😎🇷🇼  is a full-stack software engineer passionate about building beautiful and interactive interfaces. My favorite thing about software engineering has to be the feeling you get from being able to create or to be part of a team that can create something that can change, transform, and improve the lives of many people for the better. I do have experience in working with Modern Web Development Technologies. Some of the technologies I
            work with are mainly on both front and back-end software development whereas I use technologies like MongoDB, NodeJS, Postgres, Firebase, Express and React. I also have experience working with testing tools such as Jest, Mocha, and Chai.
            {' '}
          </p>
          <p className="mt-10">
            I hold 5 Years of experience in this field whereas I have contributed, Volunteered and worked with several institions both private and non-governmental organisation. this provided me with a large number of connections so as experience some of those companies are
            {' '}
            <a href="https://dalosystems.com/" target="_blank" className="text-blue-500  hover:text-primary-100"> Dalo Systems, </a>
            {' '}
            {' '}
            <a href="https://kitech.rw/" target="_blank" className="text-blue-500  hover:text-primary-100"> Kitech </a>
            {' '}
            ,
            {' '}
            <a href="https://www.kstorez.com/" target="_blank" className="text-blue-500  hover:text-primary-100"> Kstorez </a>
            {' '}
            , etc..., Not only Institutions and organisations I have worked with but i also have attended several programs and bootcamps where
            I have got the chance to meet like-minded people both localy and globaly, cool right? some of those programs are like
            {' '}
            <a href="https://www.alxafrica.com/" target="_blank" className="text-blue-500  hover:text-primary-100"> ALX Africa </a>
            {' '}
            ,
            <a href="https://andela.com/" target="_blank" className="text-blue-500 hover:text-primary-100"> Andela </a>
            {' '}
            ,
            <a href="https://gdg.community.dev/" target="_blank" className="text-blue-500 hover:text-primary-100"> GDG </a>
            {' '}
            , etc ...
          </p>
          <p className="mt-4">
            you can reach me using the below social media platforms 😃.
          </p>
        </div>
        <div className="flex flex-row mt-10">
          {/* social media */}
          <a href="https://github.com/pextech" target="_blank"><img src={github} alt="about me" className="w-6 h-6  mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="mailto:mcstain1639@gmail.com" target="_blank"><img src={email} alt="about me" className="w-6 h-6  mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://www.linkedin.com/in/mupenzi-cedrick-10a158196" target="_blank"><img src={linkedin} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://web.facebook.com/profile.php?id=100008597651836" target="_blank"><img src={facebook} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://www.instagram.com/pextech_/" target="_blank"><img src={instagram} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
          <a href="https://twitter.com" target="_blank"><img src={twitter} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ... hover:shadow-xl" /></a>
          <a href="https://wa.me/250780812252text=Hey cedrick! wassup" target="_blank"><img src={whatsapp} alt="about me" className="w-6 h-6 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-110 ..." /></a>
        </div>
        <div className=" mr-0 mt-20">
          {/* button */}
          <button className="h-12 w-9/12 rounded-sm text-white border-3 border-gray-700 bg-gray-700 xl:ml-10 ml-2 hover:bg-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..." attribute="contact" type="button">Send me a query</button>
        </div>
      </div>
    </div>
  );
}

export default About;

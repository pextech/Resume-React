import React from 'react';
// import ProgressBar from '@ramonak/react-progress-bar';
import Skill from './Skill';
import reactimg from '../../images/react.png';
import redux from '../../images/redux.png';
import tailwind from '../../images/tailwind.png';
import webpack from '../../images/webpack.png';
import html from '../../images/html5.png';
import css from '../../images/css.png';
import bootstrapp from '../../images/bootstrapp.png';
import figma from '../../images/figma.png';
import git from '../../images/git.png';
import netlify from '../../images/netlify.png';
import jest from '../../images/jest.png';
import docker from '../../images/docker.png';
import axios from '../../images/axios.png';
import eslint from '../../images/eslint.png';
import js from '../../images/js.png';
import node from '../../images/nodejss.png';
import express from '../../images/express.png';
import mongo from '../../images/mongodb.png';
import postgres from '../../images/postgres.png';
import sequelize from '../../images/sequelize.png';
import mocha from '../../images/mocha.png';
import php from '../../images/php.png';
import jwt from '../../images/jwt.png';
import firebase from '../../images/firebase.png';
import heroku from '../../images/heroku.png';
import travis from '../../images/travis.jpg';
import c from '../../images/c.png';
import net from '../../images/net.png';

// import travis from '../../images/travis.png';

function SkillSection() {
  return (
    <div className="flex flex-col p-2 mt-2">
      <div className="flex flex-col text-center justify-center">
        <p className="text-gray-800 font-light text-center text-2xl my-10 ">Languages / Tools</p>
      </div>
      <div className="flex flex-row justify-around skill">
        {/* container */}
        <div className="bg-white shadow-md  text-center hold flex flex-col hover:shadow-2xl width transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
          {/* left side box */}
          <p className="text-gray-800 font-light text-center text-xl m-4">Front-end (primary - secondary)</p>
          <div className="flex flex-row">
            {' '}
            <div>
              {/* inner left side */}
              <div className="flex flex-col mt-5">
                <Skill name="React" image={reactimg} level="92%" />
                <Skill name="Webpack" image={webpack} level="83%" />
                <Skill name="Redux" image={redux} level="86%" />
                <Skill name="Tailwind" image={tailwind} level="90%" />
                <Skill name="Bootstrap" image={bootstrapp} level="55%" />
                <Skill name="HTML 5" image={html} level="95%" />
                <Skill name="CSS 3" image={css} level="97%" />
                <Skill name="javascript" image={js} level="90%" />

              </div>
            </div>
            {' '}
            <div className="border-l-2 border-gray-100">
              {/* inner right side */}
              <div className="flex flex-col mt-5">
                <Skill name="Figma" image={figma} level="91%" />
                <Skill name="Git" image={git} level="95%" />
                <Skill name="Netlify" image={netlify} level="84%" />
                <Skill name="Jest" image={jest} level="72%" />
                <Skill name="Docker" image={docker} level="83%" />
                <Skill name="Axios" image={axios} level="91%" />
                <Skill name="Eslint" image={eslint} level="96%" />

              </div>
            </div>
          </div>

        </div>
        <div className="bg-white shadow-md  text-center hold flex flex-col hover:shadow-2xl width transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ...">
          {/* right side box */}
          <p className="text-gray-800 font-light text-center text-xl m-4">Back-end (primary - secondary)</p>
          <div className="flex flex-row">
            {' '}
            <div>
              {/* inner left side */}
              <div className="flex flex-col mt-5">
                <Skill name="NodeJS" image={node} level="96%" />
                <Skill name="Express" image={express} level="97%" />
                <Skill name="MongoDB" image={mongo} level="92%" />
                <Skill name="PostgreSQL" image={postgres} level="94%" />
                <Skill name="Mocha" image={mocha} level="88%" />
                <Skill name="Firebase" image={firebase} level="96%" />
                <Skill name=".Net" image={net} level="66%" />
              </div>
            </div>
            {' '}
            <div className="border-l-2 border-gray-100">
              {/* inner right side */}
              <div className="flex flex-col mt-5">
                <Skill name="PHP" image={php} level="76%" />
                <Skill name="JWT" image={jwt} level="92%" />
                <Skill name="Sequelize" image={sequelize} level="92%" />
                <Skill name="Heroku" image={heroku} level="94%" />
                <Skill name="Travis" image={travis} level="88%" />
                <Skill name="C#" image={c} level="72%" />
                <Skill name="Javascript" image={js} level="96%" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SkillSection;

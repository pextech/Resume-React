/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable max-len */
import React from 'react';
import AOS from 'aos';
import phone from '../../images/phone-call.png';
import location from '../../images/placeholder.png';
import email from '../../images/envelope.png';

AOS.init();
function Contact() {
  return (
    <div className="bg-primary-200 p-10 flex flex-row justify-around contact" id="contact">
      {/* contact container */}
      <div className="flex flex-col address justify-center" data-aos="fade-down">
        {/* left descr */}
        <div>
          {/* top */}
          <p className="text-xl text-primary-100">Reach Us</p>
          <div className="flex flex-row my-5 ">
            <img src={phone} alt="alt" className="w-6 h-6" />
            <p className="text-gray-300 ml-4">(+250) 780 812 252</p>
          </div>
          <div className="flex flex-row my-5 ">
            <img src={email} alt="alt" className="w-6 h-6" />
            <p className="text-gray-300 ml-4">mcstain1639@gmail.com</p>
          </div>
        </div>
        <div className="my-4">
          <p className="text-xl text-primary-100">Address</p>
          {/* bottom */}
          <div className="flex flex-row my-5 ">
            <img src={location} alt="alt" className="w-6 h-6" />
            <p className="text-gray-300 ml-4">KG 314 St, Kigali, Remera</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-10 form">
        {/* righ descr */}
        <div>
          <p className="text-xl text-primary-100">Drop an Enquiry</p>
          <p className="text-gray-300 my-5">Get in touch, I would like to hear from you. what is your bold idea? Your timeline? Your location?</p>
          {/* top */}
        </div>
        <div>
          {/* bottom */}
          <form className="my-5">
            <div>
              <input type="text" className="inp text-gray-300 ml-2 my-2" placeholder="Full Names" required />
              <input type="email" className="inp text-gray-300 ml-2 my-2" placeholder="Email" required />
            </div>
            <textarea type="text" rows="5" className="inp text-gray-300 ml-2 my-10" placeholder="Your message" required />
            <br />
            <button type="button" className="p-2 text-md mt-6 login rounded-none text-gray-200 border-gray-900 bg-gray-900  hover:bg-gray-200 hover:text-gray-700 hover:shadow-2xl ">Send</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Contact;

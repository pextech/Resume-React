/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import AOS from 'aos';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../../store/actions/noteAction';
import inputActions from '../../store/actions/inputAction';
import 'react-toastify/dist/ReactToastify.css';
import phone from '../../images/phone-call.png';
import location from '../../images/placeholder.png';
import envelope from '../../images/envelope.png';

function Contact() {
  const name = useSelector((state) => state.inputs.name);
  const email = useSelector((state) => state.inputs.email);
  const message = useSelector((state) => state.inputs.message);
  const loading = useSelector((state) => state.inputs.loading);
  const error = useSelector((state) => state.inputs.error);

  const dispatch = useDispatch();

  const addNote = (e) => {
    e.preventDefault();
    if (name && email && message) {
      dispatch(noteActions.addNote({
        name,
        email,
        message,
      }));
      dispatch(inputActions.resetInputs());
      dispatch(inputActions.setError(false));
      dispatch(inputActions.setLoading(true));
      if (loading === true) {
        toast.dark('Message is successfully sent', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (error === true) {
        toast.error('error sending message!!!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
            <img src={envelope} alt="alt" className="w-6 h-6" />
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
          <form
            className="my-5"
            onSubmit={addNote}
          >
            <div>
              <input
                type="text"
                className="inp text-gray-300 ml-2 my-2 mt-4"
                placeholder="Full Names"
                value={name}
                onChange={(e) => dispatch(inputActions.setInputName(e.target.value))}
                required
              />
              <input
                type="email"
                className="inp text-gray-300 ml-2 my-2 mt-4"
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(inputActions.setInputMail(e.target.value))}
                required
              />
            </div>
            <textarea
              type="text"
              rows="5"
              className="inp text-gray-300 ml-2 my-10"
              placeholder="Your message"
              value={message}
              onChange={(e) => dispatch(inputActions.setInputMessage(e.target.value))}
              required
            />
            <br />
            <button type="submit" className="p-2 text-md mt-6 login rounded-none text-gray-200 border-gray-900 bg-gray-900  hover:bg-gray-200 hover:text-gray-700 hover:shadow-2xl transition duration-500 ease-in-out transform ...">Send</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

  );
}

export default (Contact);

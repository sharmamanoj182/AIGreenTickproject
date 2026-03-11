import React, { Fragment } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Loginstep2 = () => {
  return (
    <Fragment>
      <div className="w-full max-w-md z-10">
        <h2 className="text-[28px] font-medium mb-4 text-black font-roboto">
          Login to AI Green Tick
        </h2>

        <h3 className="text-[20px] mt-40 font-medium mb-1 text-black">
          Trouble Logging In?
        </h3>
        <p className="text-slate-600 text-[14px]">
          Enter your username or email to help us find your account. Otherwise contact project owner.
        </p>

        <form className="space-y-5 mt-6" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              type="text"
              placeholder="Username/EmailID"
              className="w-full border bg-white border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#11C15B] outline-none transition-all"
            />
          </div>

          <Button 
            text="Continue" 
            variant="primary"
            onClick={() => console.log("Continue Clicked")}
            icon2={<FontAwesomeIcon icon={faArrowRight} />} 
          />
        </form>

        <div className="mt-8 text-right space-y-2">
          <a href="#" className="text-sm text-blue-500 hover:text-blue-700 block transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Login
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Loginstep2;
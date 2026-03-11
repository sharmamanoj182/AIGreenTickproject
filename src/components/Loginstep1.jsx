import React, { Fragment } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
const Loginstep1 = () => {


return(

  <Fragment>
     <div className="w-full max-w-md z-10">
          <h2 className="text-[28px] font-medium mb-4 text-black font-roboto">Login to AI Green Tick</h2>

          <Button text="Continue With Google" variant="primary"
            icon={
              <div>
                 <FontAwesomeIcon icon={faGoogle} />
              </div>
            }
            onClick={() => console.log("Google Click")}
          />

          <div className="relative my-8 text-center">
            <hr className="border-slate-100" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-400 text-sm">Or</span>
          </div>

          <form className="space-y-5">
            <div className="relative">
              <label className="absolute -top-2 left-4 bg-white px-1 text-xs font-semibold text-gray-400">Your Name</label>
              <input
                type="text"
                defaultValue="Manoj Kumar Sharma"
                className="w-full border bg-white border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#11C15B] outline-none transition-all"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border bg-white border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-[#11C15B] outline-none transition-all"
              />
            </div>

           <Button text="Continue" variant="primary"
            onClick={() => console.log("Google Click")}
             icon2={
              <div>
               <FontAwesomeIcon icon={faArrowRight} />
              </div>
            }
          />
          </form>

          <div className="mt-8 text-right space-y-2">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700 block transition-colors">Forgot Password ?</a>
            <p className="text-sm text-blue-500">Not a Member Yet ? <a href="#" className="font-bold hover:underline">Signup</a></p>
          </div>
        </div>
  </Fragment>


);
};

export default Loginstep1;
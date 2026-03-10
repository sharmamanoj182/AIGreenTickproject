import React from 'react';
import logo from "./assets/aiGreenTick-logo.png";
import graphic1 from "./assets/graphic1.png";
import transbg from "./assets/transbg.png";
import buttonicon_Google from "./assets/buttonicon_Google.png";
import whitearrow from "./assets/white-arrow.png";

import Button from './components/Button.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen bg-white text-slate-900">

      {/* Left Side: Info Section (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col w-1/2 bg-[#E2F5FF] p-6 justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold italic tracking-tight"><img src={logo} alt='Logo' title='Logo' /></span>
        </div>

        <div className="max-w-full mt-40">
          <h1 className="text-4xl font-bold leading-tight mb-6 text-slate-800">
            The smarter way to broadcast on WhatsApp.
          </h1>
          <p className="text-[#1a1a1a] text-lg font-light mt-7 text-[20px] max-w-[90%]">
            Upload your contacts, pick a template, and hit send. It's that simple.
            Scale your outreach with our high-speed campaign engine.
          </p>
        </div>

        {/* Mockup Illustration Placeholder */}
        <div className="flex justify-center mt-7.5">
          <div className="relative w-72 h-[500px]flex items-center justify-center overflow-hidden">
            <img src={graphic1} alt='Login Graphic' title='Login Graphic' />

          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `url(${transbg})` }}
        ></div>

        <div className="w-full max-w-md z-10">
          <h2 className="text-[28px] font-medium mb-4 text-black font-roboto">Login to AI Green Tick</h2>

          <Button text="Continue With Google" variant="primary"
            icon={
              <div>
                <img src={buttonicon_Google} />
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
                <img src={whitearrow} />
              </div>
            }
          />
          </form>

          <div className="mt-8 text-right space-y-2">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700 block transition-colors">Forgot Password ?</a>
            <p className="text-sm text-blue-500">Not a Member Yet ? <a href="#" className="font-bold hover:underline">Signup</a></p>
          </div>
        </div>
      </div>

    </div>
  );
}
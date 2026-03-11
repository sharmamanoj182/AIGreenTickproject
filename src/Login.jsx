import React from 'react';
import logo from "./assets/aiGreenTick-logo.png";
import graphic1 from "./assets/graphic1.png";
import transbg from "./assets/transbg.png";
import Loginstep1 from './components/Loginstep1';
import Loginstep2 from './components/Loginstep2';


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


      {/* <Loginstep1/> */}
      <Loginstep2/>
       

      </div>

    </div>
  );
}
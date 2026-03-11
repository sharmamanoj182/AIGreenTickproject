import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Button = ({ 
  text, 
  icon, 
  icon2,
  onClick, 
  className = "", 
  variant = "primary", // primary, outline, or danger
  type = "button" 
}) => {
  

  const variants = {
    primary: "bg-[#11C15B] hover:bg-[#0fa84e] text-white",
    outline: "border-[1.5px] border-gray-300 text-slate-700 hover:bg-gray-50",
    danger: "bg-red-500 hover:bg-red-600 text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full h-[56px] cursor-pointer flex items-center justify-center gap-[12px] 
        rounded-[20px] font-semibold transition-all active:scale-[0.98]
        ${variants[variant]} 
        ${className}
      `}
    >
  
      {icon && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
      
      <span className="text-[20px]">
        {text}
      </span>
         {icon2 && (
        <span className="flex items-center justify-center">
          {icon2}
        </span>
      )}
    </button>
  );
};

export default Button;
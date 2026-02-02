import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`  lg:px-10 flex justify-center  items-center py-3 hover:scale-[1.1] cursor-pointer lg:rounded-[20px] rounded-[5.42px] lg:text-lg text-[10px]  transition ${className || ''}`}
      style={
        {
          boxShadow: '0px 4px 4px 0px #B2B2B280'
        }
        
      }
    >
      {children}
    </button>
  );
};

export default Button;

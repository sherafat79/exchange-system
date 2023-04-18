import React, { ButtonHTMLAttributes } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;

}
const Button: React.FC<IProps> = ({ children,...rest }) => {
  return (
    <button className="mx-auto lg:mx-0 hover:underline gradient
     text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg
      focus:outline-none focus:shadow-outline transform transition
       hover:scale-105 duration-300 ease-in-out"
       {...rest}
       >
      {children}
    </button>
  );
};

export default Button;

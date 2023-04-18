import { Field, ErrorMessage } from "formik";
import React from "react";
interface IProps {
  label: string;
  description?: string;
  type?: string;
  name: string;
}
const Input: React.FC<IProps> = ({ label, description, name, type }) => {
  return (
    <>
      <div className="grid grid-cols-1 my-4  ">
        <label className="uppercase text-sm  mb-1   ">
          {label}
          {description &&<span className="text-xs  text-gray-400">{description}</span>}
        </label>
        <Field
          name={name}
          type={type}
          className="py-2 px-3 rounded-xl
         border   border-gray-200
          mt-1 focus:outline-none focus:ring-1
           focus:ring-purple-600 focus:border-transparent"
        />

        <ErrorMessage
          name={name as string}
          component="span"
          className="text-xs text-red-400  mt-2"
        />
      </div>
    </>
  );
};
Input.defaultProps = {
  description: "",
  type:"string"
};
export default Input;

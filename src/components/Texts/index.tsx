import React from "react";

interface CustomTextProps {
  children: React.ReactNode;
}

export const ParagrahSimple: React.FC<CustomTextProps> = ({ children }) => {
  return (
    <p className='font-sans text-sm font-normal leading-normal text-white antialiased opacity-75'>
      {children}
    </p>
  );
};

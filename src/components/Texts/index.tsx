import React from "react";

interface CustomTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ParagrahSimple: React.FC<CustomTextProps> = ({ children }) => {
  return (
    <p className='font-sans text-sm font-normal leading-normal text-white antialiased opacity-75'>
      {children}
    </p>
  );
};

export const Title3: React.FC<CustomTextProps> = ({ children, className }) => {
  return (
    <h3
      className={`block font-sans text-base font-medium leading-relaxed text-white antialiased ${className}`}
    >
      {children}
    </h3>
  );
};

export const Title2: React.FC<CustomTextProps> = ({ children }) => {
  return (
    <h2 className='text-3xl break-words max-sm:text-2xl max-xl:text-center font-bold'>
      {children}
    </h2>
  );
};

export const Title1: React.FC<CustomTextProps> = ({ children, className }) => {
  return (
    <h1
      className={`text-4xl break-words max-sm:text-2xl max-xl:text-center font-bold ${className}`}
    >
      {children}
    </h1>
  );
};

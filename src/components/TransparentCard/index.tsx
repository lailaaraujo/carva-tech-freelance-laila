"use client";

import React from "react";

interface TransparentCardProps {
  text: string;
}

export default function TransparentCard({ text }: TransparentCardProps) {
  return (
    <div className='w-auto'>
      <button className= "relative overflow-hidden text-yellow-300 font-medium py-2 px-4 rounded-md border transition-colors duration-300" style={{ background: 'linear-gradient(to right, #00b4d8, #001159)', borderRadius: '8px' }}>
        {text}
      </button>
    </div>
  );
}

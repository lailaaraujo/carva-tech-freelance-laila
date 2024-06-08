"use client";

import React from "react";

interface TransparentCardProps {
  text: string;
}

export default function TransparentCard({ text }: TransparentCardProps) {
  return (
    <div className='w-auto'>
      <button className="button">Peça já o seu</button>
    </div>
  );
}

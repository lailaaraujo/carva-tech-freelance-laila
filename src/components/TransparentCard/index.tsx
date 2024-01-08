"use client";

import React from "react";

interface TransparentCardProps {
  text: string;
}

export default function TransparentCard({ text }: TransparentCardProps) {
  return (
    <div className='w-auto'>
      <p className='font-syne font-medium flex w-full justify-center text-white border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
        {text}
      </p>
    </div>
  );
}

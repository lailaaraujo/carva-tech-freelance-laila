import React from "react";
import { Metadata } from "next";
import HomePage from ".";

export const metadata: Metadata = {
  title: "CarvaTech - Início",
  description: "Seja muito bem vindo ao meu site.",
};

export default function Home() {
  return (
    <main className='  flex flex-col gap-5'>
      <div className=' w-full '>
        <p className=' flex w-full justify-center text-white border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Carva Tech - versão de desenvolvimento
        </p>
      </div>
      <div className='w-full flex justify-center items-center h-auto'>
        <HomePage />
      </div>
    </main>
  );
}

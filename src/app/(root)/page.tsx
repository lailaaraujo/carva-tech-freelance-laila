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
      </div>
      <div className='w-full flex justify-center items-center h-auto'>
        <HomePage />
      </div>
    </main>
  );
}

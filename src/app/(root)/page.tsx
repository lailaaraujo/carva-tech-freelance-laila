import React from "react";
import { Metadata } from "next";
import HomePage from ".";


export const metadata: Metadata = {
  title: "CarvaTech - Início",
  description: "Seja muito bem vindo ao meu site.",
};

export default async function Home() {
  return (
    <main className='  flex flex-col gap-5'>
      <div className=' w-full '>
      </div>
      <div className='w-full flex justify-center items-center h-auto'>
        <HomePage />
      </div>
      <div>
      </div>
      <section className="flex w-full h-[12.5rem] bg-background-carva-tech bg-cover">
      <div className="flex justify-center ai">
        <span className="text-2xl text-white font-bold">Seja bem vindo</span>
      </div>
    </section>

    </main>
  );
}

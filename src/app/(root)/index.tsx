"use client";

import Image from "next/image";
import React from "react";
import main from "../../../public/heart.png";
import TransparentCard from "@/components/TransparentCard";

export default function HomePage() {
  return (
    <>
      <section className='w-full max-w-100vw h-auto flex flex-col justify-center items-center py-10'>
        <div className='w-[400px] h-[400px]'>
          <Image
            src={main}
            alt='logo principal de boas vindas'
            className='w-full h-full'
          />
        </div>
        <TransparentCard text='Conferir ofertas' />
        <div className='w-full left-ball right-ball'></div>
      </section>
    </>
  );
}

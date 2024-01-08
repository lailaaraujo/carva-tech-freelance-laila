"use client";

import Image from "next/image";
import React from "react";
import main from "../../../public/heart.png";
import TransparentCard from "@/components/TransparentCard";
import { ContentTitle } from "@/components/Title";
import LucideIcon from "@/components/LucideIcon";

export default function HomePage() {
  return (
    <>
      <section className='w-full max-w-[92vw] h-full flex flex-col justify-center items-center py-10 '>
        <div className='w-full h-full flex space-x-4 justify-between items-center'>
          <div className='w-full h-full max-w-[33%] flex items-center text-center'>
            <ContentTitle
              firstWord='Aqui forjamos máquinas de guerra'
              flexCol
              secondWord=''
            />
          </div>
          <div className='w-auto h-auto flex items-center justify-center '>
            <Image
              src={main}
              alt='logo principal de boas vindas'
              className='w-auto h-[400px]'
            />
          </div>
          <div className='w-full h-full max-w-[33%] flex flex-col items-start justify-center text-center'>
            <LucideIcon
              color='#36001B'
              name='Swords'
              size='w-10 h-10'
            />
            <LucideIcon
              color='#36001B'
              name='Swords'
              size='w-10 h-10'
            />
            <LucideIcon
              color='#36001B'
              name='Swords'
              size='w-10 h-10'
            />
            <LucideIcon
              color='#36001B'
              name='Swords'
              size='w-10 h-10'
            />
            <LucideIcon
              color='#36001B'
              name='Swords'
              size='w-10 h-10'
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <TransparentCard text='Conferir ofertas' />
        </div>
        <div className='w-full left-ball right-ball'></div>
      </section>
    </>
  );
}

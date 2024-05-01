import Image, { StaticImageData } from "next/image";
import React from "react";
import { Title1, Title2, Title3 } from "../Texts";

interface ImageWithTextProps {
  image: string | StaticImageData;
}

export default function ImageWithText({ image }: ImageWithTextProps) {
  return (
    <section className='flex flex-col gap-12 items-center justify-center'>
      <div className='w-full text-center'>
        <Title1>Qualidade, segurança e honra</Title1>
        <Title3 className='pb-12'>
          Não brincamos em serviço quando o assunto é o seu espaço de lazer!
        </Title3>
      </div>
      <section className='container flex gap-8 justify-center items-center'>
        <div className='h-auto flex w-96 flex-col rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit    lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-white-700 shadow-md'>
          <div className='w-full mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700'>
            <Image
              src={image}
              className='h-full w-full object-cover'
              alt='none'
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className='flex flex-col max-w-96'>
          <Title2>Seu setup dos sonhos</Title2>
          <Title3>
            Aqui na CarvaTech temos tudo para o seu setup, desde mouse pads,
            teclados, memórias ram até placa de vídeos e monitores. Conte
            conosco para montar o computador mais dígno de glória dos sete
            reinos.
          </Title3>
        </div>
      </section>
      <section className='container flex flex-row-reverse gap-8 justify-center items-center'>
        <div className='h-auto flex w-96 flex-col rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit    lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-white-700 shadow-md'>
          <div className='w-full mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700'>
            <Image
              src={image}
              className='h-full w-full object-cover'
              alt='none'
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className='flex flex-col max-w-96'>
          <Title2>Seu setup dos sonhos</Title2>
          <Title3>
            Aqui na CarvaTech temos tudo para o seu setup, desde mouse pads,
            teclados, memórias ram até placa de vídeos e monitores. Conte
            conosco para montar o computador mais dígno de glória dos sete
            reinos.
          </Title3>
        </div>
      </section>
      <section className='container flex gap-8 justify-center items-center'>
        <div className='h-auto flex w-96 flex-col rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit    lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-white-700 shadow-md'>
          <div className='w-full mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700'>
            <Image
              src={image}
              className='h-full w-full object-cover'
              alt='none'
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className='flex flex-col max-w-96'>
          <Title2>Seu setup dos sonhos</Title2>
          <Title3>
            Aqui na CarvaTech temos tudo para o seu setup, desde mouse pads,
            teclados, memórias ram até placa de vídeos e monitores. Conte
            conosco para montar o computador mais dígno de glória dos sete
            reinos.
          </Title3>
        </div>
      </section>
    </section>
  );
}

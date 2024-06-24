import Image from "next/image";
import React from "react";
import main from "../../../public/jinx2.png";
import TransparentCard from "../../components/TransparentCard";
import { Title1, Title3 } from "../../components/Texts";
import { ContentTitle } from "../../components/Title";

export default function HomePage() {
  return (
    <section className='container mx-auto flex flex-col gap-8 md:gap-16 lg:gap-32'>
      <section className='w-full max-w-[92vw] h-full flex flex-col justify-center items-center py-10'>
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
          <div className='max-w-full md:max-w-[33%] flex flex-col items-center text-center mb-4 md:mb-0'>
            <ContentTitle
              firstWord='Aqui forjamos'
              secondWord='Sua máquina de guerra'
              flexCol
            />
          </div>
          <div className='flex justify-center items-center ml-0 md:ml-4'>
            <Image
              src={main}
              alt='logo principal de boas-vindas'
              className='w-full h-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px] max-h-[200px] md:max-h-[300px] lg:max-h-[400px]'
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <TransparentCard text='Conferir ofertas' />
        </div>
        <div className='w-full left-ball right-ball'></div>
      </section>

      <section className='container mx-auto flex flex-col gap-6 md:gap-12'>
        <div className='w-full text-center'>
          <Title1>Qualidade, segurança e honra</Title1>
          <Title3 className='pb-6 md:pb-12'>
            Não brincamos em serviço quando o assunto é o seu espaço de lazer!
          </Title3>
        </div>
      </section>
    </section>
  );
}

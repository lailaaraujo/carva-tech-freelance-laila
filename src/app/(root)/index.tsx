"use client";

import Image from "next/image";
import React from "react";
import main from "../../../public/heart.png";
import TransparentCard from "@/components/TransparentCard";
import { ContentTitle } from "@/components/Title";
import LucideIcon from "@/components/LucideIcon";
import CardResponsiveTest from "@/components/Cards";
import blackShield from "../../../public/blackShield.png";
import blackArtef from "../../../public/blackArtef.png";
import blackCoin from "../../../public/blackCoin.png";
import Top4WithTopics from "@/components/Top4WithTopics";
import ImageWithText from "@/components/ImageWithText";
import { Title1, Title3 } from "@/components/Texts";
import MiniCard from "@/components/MiniCard";

export default function HomePage() {
  return (
    <>
      <section className='container flex flex-col gap-32'>
        <section className='w-full max-w-[92vw] h-full flex flex-col justify-center items-center py-10 '>
          <div className='w-full h-full flex space-x-4 justify-center items-center'>
            <div className='w-auto h-full max-w-[33%] flex items-center text-center'>
              <ContentTitle
                firstWord='Aqui forjamos'
                secondWord='Sua máquina de guerra'
                flexCol
              />
            </div>
            <div className='w-auto h-auto flex items-center justify-center '>
              <Image
                src={main}
                alt='logo principal de boas vindas'
                className='w-full h-full max-w-[400px] max-h-[400px] center'
              />
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <TransparentCard text='Conferir ofertas' />
          </div>
          <div className='w-full left-ball right-ball'></div>
        </section>

        <section className='container flex flex-col gap-12 '>
          <div className='w-full text-center'>
            <Title1>Qualidade, segurança e honra</Title1>
            <Title3 className='pb-12'>
              Não brincamos em serviço quando o assunto é o seu espaço de lazer!
            </Title3>
          </div>
          <div className='flex flex-wrap justify-around gap-6'>
            <CardResponsiveTest
              image={blackShield}
              title='Forjados na mais alta qualidade'
              paragraph='Com durabilidade excepcional e desempenho superior, nossos produtos
            são meticulosamente forjados, assim como os materiais utilizados
            para armar guerreiros no ano 1300, proporcionando a melhor
            experiência para o seu computador.'
            />
            <CardResponsiveTest
              image={blackArtef}
              title='Alta raridade como artefatos'
              paragraph='Com durabilidade excepcional e desempenho superior, nossos produtos são verdadeiros artefatos raros no mundo da tecnologia, garantindo uma experiência única para o seu computador.'
            />
            <CardResponsiveTest
              image={blackCoin}
              title='Ofertas imperdíveis na capital'
              paragraph='Explore nossa seleção de produtos com preços tão baixos que desafiam a concorrência. Na capital da economia, trazemos para você ofertas irresistíveis, tornando a alta qualidade acessível a todos os entusiastas de tecnologia.'
            />
          </div>
        </section>
        <ImageWithText image={blackShield} />
        <MiniCard image={blackShield} />
      </section>
    </>
  );
}

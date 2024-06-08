import React from 'react';
import Image from 'next/image';

const PerifericoSection = () => {
  return (
    <section className="flex w-full h-auto lg:h-[80rem] bg-background-carva-tech bg-cover relative flex-col lg:flex-row justify-center items-center p-4">
      <div className="lg:w-1/2 p-4 lg:ml-20">
        <Image
          src="/periferico.png"
          alt="Imagem de mouse e teclado"
          width={400}
          height={400}
          className="object-contain lg:h-full"
        />
      </div>
      <div className="lg:w-1/2 p-4 flex flex-col items-center mr-10">
        <Image
          src="/texto3.png"
          alt="Imagem de texto"
          width={500}
          height={500}
          className="object-contain lg:h-full"
        />
       <button className="button">Peça já o seu</button>
      </div>
    </section>
  );
};

export default PerifericoSection;

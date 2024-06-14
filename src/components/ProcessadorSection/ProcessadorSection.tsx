import React from 'react';
import Image from 'next/image';

const ProcessadorSection = () => {
  return (
    <section className="flex w-full h-auto lg:h-[80rem] bg-background-tech bg-cover relative flex-col lg:flex-row justify-center items-center p-4">
      <div className="lg:w-1/2 p-4 flex flex-col items-center ml-10">
        <Image
          src="/texto4.png"
          alt="Imagem de texto"
          width={500}
          height={500}
          className="object-contain lg:h-full"
        />
        <button className="button mt-6">Peça já o seu</button>
      </div>
      <div className="lg:w-1/2 p-4 lg:-mr-10">
        <Image
          src="/processador.png"
          alt="Imagem de processador"
          width={400}
          height={400}
          className="object-contain lg:h-full"
        />
      </div>
    </section>
  );
};

export default ProcessadorSection;

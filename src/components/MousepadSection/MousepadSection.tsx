import React from 'react';
import Image from 'next/image';

const MousepadSection = () => {
  return (
    <section className="flex w-full h-auto lg:h-[80rem] bg-background-tech bg-cover relative flex-col lg:flex-row justify-center items-center p-4">
      <div className="w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-start lg:ml-10">
        <Image
          src="/texto6.png"
          alt="Imagem de texto"
          width={500}
          height={500}
          className="object-contain max-w-full lg:max-w-none lg:h-full ml-10"
        />
        <button className="button mt-6 ml-10">Peça já o seu</button>
      </div>
      <div className="w-full lg:w-1/2 p-4 lg:-mr-10 flex justify-center lg:justify-end">
        <Image
          src="/mousepad.png"
          alt="Imagem de mousepad"
          width={400}
          height={400}
          className="object-contain max-w-full lg:max-w-none lg:h-full mr-20"
        />
      </div>
    </section>
  );
};

export default MousepadSection;

import React from 'react';
import Image from 'next/image';

const JoystickSection = () => {
  return (
    <section className="flex w-full h-auto lg:h-[80rem] bg-background-carva-tech bg-cover relative flex-col lg:flex-row justify-center items-center p-4">
      <div className="w-full lg:w-1/2 p-4 lg:ml-20 flex justify-center lg:justify-start">
        <Image
          src="/joystick.png"
          alt="Imagem de joystick"
          width={400}
          height={400}
          className="object-contain max-w-full lg:max-w-none lg:h-full"
        />
      </div>
      <div className="w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-start lg:mr-10">
        <Image
          src="/texto5.png"
          alt="Imagem de texto"
          width={500}
          height={500}
          className="object-contain max-w-full lg:max-w-none lg:h-full"
        />
        <button className="button mt-6">Peça já o seu</button>
      </div>
    </section>
  );
};

export default JoystickSection;

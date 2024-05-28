
import Image from 'next/image';
import React from 'react';

const BackgroundBlur = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover blur-sm"
          src="/background.jpg"
          alt="Background"
          width={100}
          height={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Conteúdo adicional pode ser colocado aqui */}
      </div>
    </div>
  );
};

export default BackgroundBlur;

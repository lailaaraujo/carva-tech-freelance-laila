import Image, { StaticImageData } from "next/image";
import React from "react";

interface MiniCardProps {
  image: string | StaticImageData;
  className?: string;
}

export default function MiniCard({ image, className }: MiniCardProps) {
  return (
    <div
      className={`${className} flex flex-col gap-2 w-full max-w-48 h-full max-h-52 bg-auto bg-white `}
    >
      <Image
        src={image}
        alt='Card Image'
        className='w-48 h-52'
      />
    </div>
  );
}

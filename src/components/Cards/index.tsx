import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardResponsiveTestProps {
  image: string | StaticImageData;
  title: string;
  paragraph: string;
}

export default function CardResponsiveTest({
  image,
  title,
  paragraph,
}: CardResponsiveTestProps) {
  return (
    <div className='flex flex-col'>
      <div className='relative flex w-96 flex-col rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 py-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit    lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-white-700 shadow-md'>
        <div className='relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700'>
          <Image
            src={image}
            className='h-full w-full object-cover'
            alt='none'
            width={400}
            height={400}
          />
        </div>
        <div className='p-6'>
          <div className='mb-2 flex items-center justify-between'>
            <p className='block font-sans text-base font-medium leading-relaxed text-white antialiased'>
              {title}
            </p>
          </div>
          <p className='block font-sans text-sm font-normal leading-normal text-white antialiased opacity-75'>
            {paragraph}
          </p>
        </div>
      </div>
      {/* <div className='w-full pt-5 px-4 mb-8 mx-auto '>
        <div className='text-sm text-gray-700 py-1'>
          Made with{" "}
          <a
            className='text-gray-700 font-semibold'
            href='https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents'
            target='_blank'
          >
            Material Tailwind
          </a>{" "}
          by{" "}
          <a
            href='https://www.creative-tim.com?ref=tailwindcomponents'
            className='text-gray-700 font-semibold'
            target='_blank'
          >
            {" "}
            Creative Tim
          </a>
          .
        </div>
      </div> */}

      {/* <!-- stylesheet -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/> */}
    </div>
  );
}

import Image from "next/image";
import { ItemMenu } from "@/components/ItemMenu/ItemMenu";

export function Header() {
  return (
    <header className='flex items-center w-full h-20 bg-zinc-200'>
      <div className='w-full max-w-7xl px-4 mx-auto'>
        <div className='flex items-center justify-between w-full mx-auto px-4 max-w-7x1'>
          <div className='flex items-center gap-14'>
            <Image
              src={"/images/logo.png"}
              alt=''
              width={60}
              height={60}
            />
            <ul className='flex flex-1 items-center gap-12 text-lg ml-80'>
              <li>
                <ItemMenu name='INÍCIO' />
              </li>
              <li>
                <ItemMenu name='SOBRE NÓS' />
              </li>
              <li>
                <ItemMenu name='GALERIA' />
              </li>
            </ul>
          </div>
          <button className='relative overflow-hidden bg-blue-500 text-yellow-300 font-medium py-2 px-4 rounded border border-blue-500 transition-colors duration-700'>
            <span className='absolute inset-0 bg-gradient-to-r from-blue-300 to-white opacity-0 transition-opacity duration-500 hover:opacity-100'></span>
            <span className='relative z-10'>CONTATO</span>
          </button>
        </div>
      </div>
    </header>
  );
}

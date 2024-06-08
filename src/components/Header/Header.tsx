import Image from "next/image";
import { ItemMenu } from "../ItemMenu/ItemMenu";

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
          <button className="button">CONTATO</button>
        </div>
      </div>
    </header>
  );
}

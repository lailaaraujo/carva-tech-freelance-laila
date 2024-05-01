import Image from "next/image";

type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
    <button className='flex items-center gap-3'>
      <span className='text-black font-semibold font-serif'>{name}</span>
    </button>
  );
}

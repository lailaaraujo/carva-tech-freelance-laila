import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black p-6">
      <div className="flex justify-between items-center ml-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image src="/logo.png" width={56} height={56} alt="Logo Carva-tech" />
        </div>
        <div className="flex-col flex-grow text-center text-[#FFE3AC]">
          <p>Nossas redes sociais</p>
          <button className="button mt-4">VOLTAR AO TOPO</button>
        </div>
        
        <div className="flex gap-4 mr-8">
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-[#188FBB] p-2 rounded-full">
            <FaWhatsapp className="text-black" />
          </a>
          <a href="https://www.instagram.com/carva_tech/" target="_blank" rel="noopener noreferrer" className="bg-[#188FBB] p-2 rounded-full">
            <FaInstagram className="text-black" />
          </a>
        </div>
      </div>
      <hr className="border-t border-[#188FBB] my-4" />
      <div className="text-center">
        <a href="mailto:your-email@example.com" className="text-xs text-[#FFE3AC]">
          your-email@example.com
        </a>
      </div>
    </footer>
  );
};

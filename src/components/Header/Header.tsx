"use client";

import Image from "next/image";
import { ItemMenu } from "../ItemMenu/ItemMenu";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from 'react-icons/fi';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && !sidebar.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className="flex items-center w-full h-20 bg-zinc-200">
      <div className="w-full max-w-7xl px-4 mx-auto">
        <div className="flex items-center justify-between w-full mx-auto px-4 max-w-7x1">
          <div className="flex items-center gap-14">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={60}
              height={60}
            />
            <ul className="hidden md:flex flex-1 items-center gap-12 text-lg ml-80">
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
          <button className="hidden md:block button">CONTATO</button>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10">
          <div id="sidebar" className="fixed top-0 right-0 w-64 bg-zinc-200 h-full z-20">
            <ul className='flex flex-col items-start gap-6 text-lg p-4'>
              <li>
                <ItemMenu name='INÍCIO' />
              </li>
              <li>
                <ItemMenu name='SOBRE NÓS' />
              </li>
              <li>
                <ItemMenu name='GALERIA' />
              </li>
              <li>
                <button className="button">CONTATO</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

import React from "react";
import { Metadata } from "next";
import HomePage from ".";
import MemoriaSection from "../../components/MemoriaSection/MemoriaSection";
import PlacaSection from "../../components/PlacaSection/PlacaSection";
import PerifericoSection from "../../components/PerifericoSection/PerifericoSection";
import ProcessadorSection from "../../components/ProcessadorSection/ProcessadorSection";
import JoystickSection from "../../components/JoystickSection/JoystickSection";
import MousepadSection from "../../components/MousepadSection/MousepadSection";
import { Footer } from "../../components/Footer/Footer";

export const metadata: Metadata = {
  title: "CarvaTech - Início",
  description: "Seja muito bem-vindo ao meu site.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="w-full">
        </div>
        <div className="w-full flex justify-center items-center h-auto gradient-background">
          <HomePage />
        </div>
        <div>
          <MemoriaSection />
        </div>
        <div>
          <PlacaSection />
        </div>
        <div>
          <PerifericoSection />
        </div>
        <div>
          <ProcessadorSection />
        </div>
        <div>
          <JoystickSection />
        </div>
        <div>
          <MousepadSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import { About } from "../../molecules/About/About";
import { Advantage } from "../../molecules/Advantage/Advantage";
import { Banner } from "../../molecules/Banner/Banner";
import { CardSection } from "../../molecules/CardSection/CardSection";
import { Microchip } from "../../molecules/Microchip/Microchip";
import { Mission } from "../../molecules/Mission/Mission";
import { PlayVideo } from "../../molecules/PlayVideo/PlayVideo";
import { Projection } from "../../molecules/Projection/Projection";

export const HomeView = () => {
  return (
    <>
      <Banner />
      <CardSection />
      <About />
      <PlayVideo />
      <Microchip />
      <Advantage />
      <Projection />
      <Mission />
      {/* LastNews */}
      {/* Partners */}
    </>
  );
};

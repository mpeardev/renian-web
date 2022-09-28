import {
  About,
  Advantage,
  Banner,
  CardSection,
  Microchip,
  Mission,
  PlayVideo,
  Projection,
  WelcomeAd,
  SectionCards,
  AboutSection,
  Functionality,
  Informative,
  OurMission,
  AboutUs,
  News,
  Partnerships,
  Contact,
  Back,
} from "..";

export const HomeView = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Banner />
      <WelcomeAd />
      <SectionCards />
      <AboutSection />
      <Functionality />
      <Informative>
        <OurMission />
        <Partnerships />
        <AboutUs />
      </Informative>
      <News />
      <Contact />
      <Back />

      {/* <CardSection /> */}
      {/* <About /> */}
      {/* <PlayVideo /> */}
      {/* <Microchip /> */}
      {/* <Advantage /> */}
      {/* <Projection /> */}
      {/* <Mission /> */}
    </div>
  );
};

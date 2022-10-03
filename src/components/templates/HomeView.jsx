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

export const HomeView = ({ setAlertActive }) => {
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <Banner />
      <WelcomeAd />
      <SectionCards />
      <AboutSection />
      <Functionality />
      <OurMission />
      <Partnerships />
      <AboutUs />
      <News />
      <Contact setAlertActive={setAlertActive} />
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

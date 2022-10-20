import {
  Banner,
  WelcomeAd,
  SectionCards,
  MainHomeSection,
  AboutSection,
  Functionality,
  OurMission,
  Advantage,
  News,
  Partnerships,
  Contact,
  Back,
} from "..";

export const HomeView = () => {
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <MainHomeSection />
      {/* <Banner /> */}
      {/* <WelcomeAd /> */}
      {/* <SectionCards /> */}
      {/* <AboutSection /> */}
      <Functionality />
      <OurMission />
      <Advantage />
      <Back />
      <News />
      <Contact />
      {/* <Partnerships /> */}
    </div>
  );
};

import {
  WelcomeAd,
  SectionCards,
  MainHomeSection,
  Functionality,
  OurMission,
  Advantage,
  News,
  Contact,
  Back,
} from "..";

export const HomeView = () => {
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <MainHomeSection />
      <Functionality />
      <OurMission />
      <Advantage />
      <Back />
      <News />
      <Contact />
    </div>
  );
};

import {
  Banner,
  WelcomeAd,
  SectionCards,
  AboutSection,
  Functionality,
  OurMission,
  AboutUs,
  News,
  Partnerships,
  Contact,
  Back,
} from "..";

export const HomeView = () => {
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
      <Contact />
      <Back />
    </div>
  );
};

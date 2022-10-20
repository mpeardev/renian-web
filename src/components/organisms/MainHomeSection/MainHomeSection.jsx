import { Banner, CardsSection, AboutSection } from "../../";

export const MainHomeSection = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Banner />
        <CardsSection />
      </div>
      <AboutSection />
    </>
  );
};

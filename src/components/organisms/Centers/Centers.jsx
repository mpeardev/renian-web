import classes from "./centers.module.scss";
import { MainContainer, MapCenters } from "../../";

export const Centers = () => {
  return (
    <section className={classes.centers}>
      <MainContainer>
        <div className={classes.centers__container}>
          <MapCenters />
        </div>
      </MainContainer>
    </section>
  );
};

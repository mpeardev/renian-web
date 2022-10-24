import Image from "next/image";
import classes from "../../organisms/Consult/consult.module.scss";

export const NotFound = () => {
  return (
    <div className={classes.consult__nochip}>
      <div>
        <Image
          src="/img/no-chip.png"
          layout="responsive"
          width={80}
          height={80}
        />
      </div>
      <p>Número de chip no encontrado</p>
    </div>
  );
};

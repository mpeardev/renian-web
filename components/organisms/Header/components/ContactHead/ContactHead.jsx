import React, { useRef } from "react";
import styles from "./contact-head.module.scss";
import Image from "next/image";
import useHover from "@react-hook/hover";

export const ContactHead = () => {
  const targetDir = useRef(null);
  const targetHours = useRef(null);
  const targetNumb = useRef(null);

  const hoverDir = useHover(targetDir);
  const hoverHours = useHover(targetHours);
  const hoverNumb = useHover(targetNumb);

  return (
    <div className={styles.contact}>
      <main className={styles.contact__container}>
        <div className={styles.contact__info}>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/gwklwoti.json"
              trigger={hoverDir ? "loop" : "none"}
              colors="primary:#000000,secondary:#dd0000"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
            <p ref={targetDir}>Av. Mariategui 1030, Jesús María</p>
          </div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/uutnmngi.json"
              trigger={hoverHours ? "loop" : "none"}
              colors="primary:#000000,secondary:#dd0000"
              style={{ width: "25px", height: "25px" }}
            ></lord-icon>
            <p ref={targetHours}>Lun-Vie 09:00 am | 6:00 pm</p>
          </div>
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/iguuenru.json"
              trigger={hoverNumb ? "loop" : "none"}
              colors="primary:#000000,secondary:#dd0000"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
            <p ref={targetNumb}>(+51) 759-4451</p>
          </div>
        </div>
        <div className={styles.contact__networks}>
          <a href="https://www.facebook.com/RenianPeru/" target="_blank">
            <Image
              src="/svg/networks/facebook-icon.svg"
              width={28}
              height={28}
              alt="fb-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/renian_peru/?hl=es-la"
            target="_blank"
          >
            <Image
              src="/svg/networks/instagram-icon.svg"
              width={28}
              height={28}
              alt="ins-icon"
            />
          </a>
        </div>
      </main>
    </div>
  );
};

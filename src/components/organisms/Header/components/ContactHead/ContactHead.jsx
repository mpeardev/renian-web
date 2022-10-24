import { useRef } from "react";
import styles from "./contact-head.module.scss";
import Image from "next/image";
import useHover from "@react-hook/hover";
import { MainContainer } from "../../../../";

export const ContactHead = () => {
  const targetDir = useRef(null);
  const targetHours = useRef(null);
  const targetNumb = useRef(null);

  const hoverDir = useHover(targetDir);
  const hoverHours = useHover(targetHours);
  const hoverNumb = useHover(targetNumb);

  return (
    <div className={styles.contact}>
      <MainContainer>
        <div className={styles.contact__container}>
          <div className={styles.contact__info}>
            <div ref={targetDir}>
              <a style={{ color: hoverDir ? "#bf002a" : "#000000" }}>
                <lord-icon
                  src="https://cdn.lordicon.com/gwklwoti.json"
                  trigger={hoverDir ? "loop" : "none"}
                  colors="primary:#bf002a,secondary:#bf002a"
                ></lord-icon>
                Av. Mariategui 1030, Jesús María
              </a>
            </div>
            <div ref={targetHours}>
              <a style={{ color: hoverHours ? "#bf002a" : "#000000" }}>
                <lord-icon
                  src="https://cdn.lordicon.com/uutnmngi.json"
                  trigger={hoverHours ? "loop" : "none"}
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: ".3rem",
                  }}
                ></lord-icon>
                Lun - Vie: 9:00am a 6:00pm | Sáb: 9:00am a 3:00pm
              </a>
            </div>
            <div ref={targetNumb}>
              <a
                href="tel:+51923683933"
                style={{ color: hoverNumb ? "#bf002a" : "#000000" }}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/iguuenru.json"
                  trigger={hoverNumb ? "loop" : "none"}
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                (+51) 923-683-933
              </a>
            </div>
          </div>
          <div className={styles.contact__networks}>
            <a
              href="https://www.facebook.com/RenianPeru/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/svg/networks/facebook-icon.svg"
                width={28}
                height={28}
                alt="fb-icon"
                priority
              />
            </a>
            <a
              href="https://www.instagram.com/renian_peru/?hl=es-la"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/svg/networks/instagram-icon.svg"
                width={28}
                height={28}
                alt="inst-icon"
                priority
              />
            </a>
            <a
              href="https://www.tiktok.com/@renian.peru?lang=en"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/svg/networks/tiktok-icon.svg"
                width={28}
                height={28}
                alt="tiktok-icon"
                priority
              />
            </a>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

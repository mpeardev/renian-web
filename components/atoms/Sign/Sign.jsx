import classes from "./sign.module.scss";
import {
  handleAuthenticate,
  handleSignMessage,
  handleUser,
} from "../../../utils/war/auth";

import { useContext } from "react";
import { Web3Context } from "../../../contexts/Web3/Web3Context";

import { useRouter } from "next/router";

export const Sign = () => {
  const { web3, handleToken } = useContext(Web3Context);
  // const { handlePreloader } = useContext(PreloaderContext);
  const router = useRouter();

  const handleClick = () => {
    // handlePreloader(true);
    handleUser(web3.account)
      .then((resolve) => {
        if (
          String(resolve?.user.publicAddress).toUpperCase() ===
          String(web3.account).toUpperCase()
        ) {
          handleSignMessage(
            web3.wallet,
            resolve?.user.publicAddress,
            resolve?.user.nonce
          )
            .then((resolve2) => {
              handleAuthenticate(
                resolve?.user.publicAddress,
                resolve2,
                handleToken
              ).then(() => {
                router.push("/cpanel");
              });
              // handlePreloader(false);
            })
            .catch((e) => {
              console.log(e);
              // handlePreloader(false);
            });
        } else {
          // message("danger", "app.errorPost.sign");
          // handlePreloader(false);
        }
      })
      .catch((e) => {
        alert("Primero Inicia seccion con Metamask");
        // message("danger", "app.errorPost.sign");
        // handlePreloader(false);
      });
  };

  return (
    <>
      <div className={classes.containerButton}>
        <button className={classes.designButton} onClick={handleClick}>
          <p>Registrar</p>
        </button>
      </div>
    </>
  );
};

// import classes from "./wallet.module.scss";
import Image from "next/image";
import { useContext } from "react";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import { web3Provider } from "../../../utils/web3";
import { DefaultModal } from "../../";
import modalClasses from "../../containers/modals/DefaultModal/default-modal.module.scss";

export const Connect = ({ setOpenDefaultModal }) => {
  const { handleWeb3 } = useContext(Web3Context);

  const validate = (providerString) => {
    web3Provider(handleWeb3, providerString);
  };

  return (
    <DefaultModal setOpenDefaultModal={setOpenDefaultModal}>
      <h3>Conectar</h3>
      <p>
        Al conectar una billetera, acepta los Términos de servicio de Firulaix
        Labs y reconoce que ha leído y entendido el Protocolo de exención de
        responsabilidad.
      </p>

      <div className={modalClasses.modal__contentBoxlist}>
        <div onClick={() => validate("metamask")}>
          <p>Metamask</p>
          <div>
            <Image
              src="/svg/metamask-logo.svg"
              layout="responsive"
              width={30}
              height={30}
              alt="metamask-logo"
            />
          </div>
        </div>
        <div onClick={() => validate("walletconnect")}>
          <p>WalletConnect</p>
          <div>
            <Image
              src="/img/walletconnect.png"
              layout="responsive"
              width={30}
              height={30}
              alt="walletconnect-logo"
            />
          </div>
        </div>
      </div>
    </DefaultModal>
  );
};

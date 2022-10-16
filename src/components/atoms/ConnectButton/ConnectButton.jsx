import classes from "./connect-button.module.scss";
import { useContext, useEffect } from "react";
import { Connect } from "../Wallet/Connect";
// import { Session } from "../Wallet/Session";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import { web3Provider } from "../../../utils/web3";

export const ConnectButton = ({ open, setOpen }) => {
  const { web3, handleWeb3 } = useContext(Web3Context);

  const validate = (providerString) => {
    web3Provider(handleWeb3, providerString);
  };

  // useEffect(() => {
  //   validate("metamask");
  // }, [web3]);

  return (
    <>
      <div className={classes.button} onClick={() => setOpen(true)}>
        <button>
          {web3.account
            ? `${web3.account.substring(0, 10)}...`
            : "Connect Wallet"}
        </button>
      </div>
      {open && !web3.account && <Connect handleClose={() => setOpen(false)} />}

      {/* {open && web3.account && <Session handleClose={() => setOpen(false)} />} */}
    </>
  );
};

import classes from "./connect-button.module.scss";
import { useContext } from "react";
import { Connect } from "../Wallet/Connect";
import { Session } from "../Wallet/Session";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import Image from "next/image";

export const ConnectButton = ({ open, setOpen }) => {
  const { web3 } = useContext(Web3Context);

  return (
    <>
      <div className={classes.button} onClick={() => setOpen(true)}>
        {web3.account && <button>{web3.account.substring(0, 10)}...</button>}
        {!web3.account && <button>Connect Wallet</button>}
      </div>
      {open && !web3.account && <Connect handleClose={() => setOpen(false)} />}

      {/* {open && web3.account && <Session handleClose={() => setOpen(false)} />} */}
    </>
  );
};

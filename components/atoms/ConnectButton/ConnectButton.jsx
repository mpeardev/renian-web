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
      <div className={classes.containerConnect} onClick={() => setOpen(true)}>
        {web3.account && `${web3.account.substring(0, 10)}...`}
        {!web3.account && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "3rem" }}>
              <Image
                src="/svg/metamask-logo.svg"
                layout="responsive"
                width={30}
                height={30}
              />
            </div>
            <p style={{ margin: "0" }}>Metamask</p>
          </div>
        )}
      </div>

      {open && !web3.account && <Connect handleClose={() => setOpen(false)} />}

      {/* {open && web3.account && <Session handleClose={() => setOpen(false)} />} */}
    </>
  );
};

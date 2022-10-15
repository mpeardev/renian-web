import classes from "./wallet.module.scss";
import { useContext } from "react";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import { Informative } from "../../";

export const Session = ({ handleClose }) => {
  const { web3, handleAccount, handleWeb3 } = useContext(Web3Context);
  // const { message } = useToast();

  const logout = async () => {
    try {
      if (web3.providerString === "walletconnect") {
        await web3.provider.disconnect();
      }
      handleWeb3(null, null);
      handleAccount("");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(web3.account ?? "");
    // message("success", "firuTower.firstFloor.faq.modal.notify");
  };

  return (
    <Informative handleClose={handleClose}>
      <h5>Sesion</h5>
      <hr />

      <div>
        <p className={classes.center}>{web3.account}</p>

        <div className={classes.options}>
          <a
            className={classes.option}
            href="https://blockscout.moonriver.moonbeam.network/address/0x2FBE6b6F1e3e2EFC69495F0c380A01c003e47225/transactions"
            target="_blank"
            rel="noreferrer noopener"
          >
            Scan
          </a>
          <div
            className={classes.option}
            onClick={copy}
            style={{ cursor: "pointer" }}
          >
            Copy
          </div>
        </div>

        <div className={classes.center} onClick={logout}>
          <button>Logout</button>
        </div>
      </div>
    </Informative>
  );
};

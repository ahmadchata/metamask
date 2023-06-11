import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePopup, Popup } from "@/store/Context";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useWallet } from "use-wallet";

const Modal: React.FC = () => {
  const wallet = useWallet();
  const { popup, setPopup } = usePopup();
  console.log(popup);

  const connectWallet = () => {
    wallet.connect();
    // toggleConnectPopup();
  };

  return popup ? (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={() => setPopup(Popup.Open)}>
          <FontAwesomeIcon color="#000" size="xs" icon={faTimes} />
        </span>
        <div className="text-center p-4">
          {wallet.status === "connected" ? (
            <div>
              <div>Account: {wallet.account}</div>
              <div>Balance: {wallet.balance}</div>
              <button
                className="btn border my-5 px-3 py-2 bg-light"
                onClick={() => wallet.reset()}
              >
                Disconnect
              </button>
            </div>
          ) : (
            <div>
              <h3>Connect a wallet</h3>
              <button
                className="btn border my-5 px-3 py-2 bg-light"
                onClick={connectWallet}
              >
                <Image
                  className="me-4"
                  src="/img/socials/metamask.png"
                  width={34}
                  height={31}
                  alt="metamask"
                />
                Metamask
              </button>
            </div>
          )}

          <p>
            By connecting your wallet, you agree to our Terms of Service,
            Privacy and Cookie Policy.
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;

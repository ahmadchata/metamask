import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useWallet } from "use-wallet";

const Popup: React.FC = () => {
  const wallet = useWallet();
  const dispatch = useDispatch();
  const connectPopup = useSelector((state: any) => state.connectPopupState);

  const toggleConnectPopup = () => {
    dispatch({
      type: "CONNECT_POP_UP_STATE",
    });
  };

  const connectWallet = () => {
    wallet.connect("injected");
    toggleConnectPopup();
  };

  return connectPopup ? (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={toggleConnectPopup}>
          <FontAwesomeIcon color="#000" size="xs" icon={faTimes} />
        </span>
        <div className="text-center p-4">
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
          <p>
            By connecting your wallet, you agree to our Terms of Service,
            Privacy and Cookie Policy.
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;

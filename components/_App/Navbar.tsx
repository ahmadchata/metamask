import Image from "next/image";
import { useDispatch } from "react-redux";
import { useWallet } from "use-wallet";

const Navbar: React.FC = () => {
  const wallet = useWallet();
  const dispatch = useDispatch();

  const toggleConnectPopup = () => {
    dispatch({
      type: "CONNECT_POP_UP_STATE",
    });
  };

  return (
    <nav className="d-flex justify-content-between py-2 px-3 sticky-top bg-white">
      <div>
        <Image
          src="/img/logo-deep-dive.png"
          width={132}
          height={25}
          alt="App logo"
        />
      </div>
      <div>
        {wallet.status === "connected" ? (
          <button className="btn wallet_btn" onClick={toggleConnectPopup}>
            {wallet.account}
          </button>
        ) : (
          <button className="btn wallet_btn" onClick={toggleConnectPopup}>
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import { usePopup, Popup } from "@/store/Context";

const Navbar: React.FC = () => {
  const { popup, setPopup } = usePopup();

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
        <button className="btn wallet_btn" onClick={() => setPopup(Popup.Open)}>
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

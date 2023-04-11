import Image from "next/image";

const Navbar: React.FC = () => {
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
        <button className="btn wallet_btn">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;

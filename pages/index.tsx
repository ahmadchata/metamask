import React from "react";
import Image from "next/image";
import sts from "@/styles/Home.module.css";
import { collectionData } from "@/store/data/collections";
import { useDispatch } from "react-redux";
import { useWallet } from "use-wallet";

const Home: React.FC = () => {
  const wallet = useWallet();
  const dispatch = useDispatch();

  const toggleConnectPopup = () => {
    dispatch({
      type: "CONNECT_POP_UP_STATE",
    });
  };

  return (
    <>
      <main>
        <section className={`row mx-0 text-white ${sts.sectionOne}`}>
          <div className="col-12 col-lg-5">
            <h1 className={`px-3 py-1 ${sts.homeTimer}`}>01:07:18</h1>
            <h1 className="mt-4">Exclusive Drop: Raven</h1>
            <p className="my-5">
              The world renowned experiential and mixed media artist is making
              her first drop, exclusively on Deep Dive. Enter for a chance to
              get one of Raven&apos;s first NFTs.
            </p>
            {wallet.status === "connected" ? (
              <button
                className="btn wallet_btn px-4 py-2"
                onClick={() => wallet.reset()}
              >
                Disconnect Wallet
              </button>
            ) : (
              <button
                className="btn wallet_btn px-4 py-2"
                onClick={toggleConnectPopup}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </section>

        <section
          className={`row mx-0 align-items-center text-white ${sts.sectionTwo}`}
        >
          <div className="col-12 col-lg-5">
            <h1 className="mt-4">Into the Portal</h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
            </p>
          </div>
          <div className="col-12 col-lg d-flex justify-content-center justify-content-lg-end">
            <div className={`${sts.cardBox}`}>
              <Image
                className="card-img-top"
                src="/img/bg/card-bg.png"
                width={386}
                height={384}
                alt="card-background"
              />
              <div className="card-body p-4">
                <h5 className="card-title mb-4">Into the portal</h5>
                <ul className="list-unstyled text-uppercase d-flex justify-content-between text-center">
                  <li>
                    <span className="d-block fw-bold">1 ETH</span>
                    <span className={sts.cardDescription}>price</span>
                  </li>
                  <li>
                    <span className="d-block fw-bold">10</span>
                    <span className={sts.cardDescription}>editions</span>
                  </li>
                  <li>
                    <span className="d-block fw-bold">1 day</span>
                    <span className={sts.cardDescription}>drops in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`row mx-0 align-items-center text-dark ${sts.sectionThree}`}
        >
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <h1 className="mt-4">The Decay</h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
            </p>
          </div>
          <div className="d-flex justify-content-center justify-content-lg-start col-12 col-lg order-2 order-lg-1">
            <div className={`${sts.cardBox}`}>
              <Image
                className="card-img-top"
                src="/img/bg/card-bg-2.png"
                width={386}
                height={384}
                alt="card-background"
              />
              <div className="card-body p-4">
                <h5 className="card-title mb-4">The Decay</h5>
                <ul className="list-unstyled text-uppercase d-flex justify-content-between text-center">
                  <li>
                    <span className="d-block fw-bold">1 ETH</span>
                    <span className={sts.cardDescription}>price</span>
                  </li>
                  <li>
                    <span className="d-block fw-bold">10</span>
                    <span className={sts.cardDescription}>editions</span>
                  </li>
                  <li>
                    <span className="d-block fw-bold">1 day</span>
                    <span className={sts.cardDescription}>drops in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside className="p-5">
        <h3>More in this Collection</h3>
        <div className={`row mt-2 mt-lg-5`}>
          {collectionData.map((collection) => (
            <div
              key={collection?.id}
              className={`shadow mt-5 mt-lg-0 col p-0 ${sts.cardBox} ${sts.spacing}`}
            >
              <Image
                className="card-img-top"
                src={collection?.image}
                width={386}
                height={384}
                alt="card-background"
              />
              <div className="card-body p-4">
                <h5 className="card-title mb-4">{collection?.title}</h5>
                <ul className="list-unstyled text-uppercase d-flex justify-content-between text-center">
                  <li>
                    <span className="d-block fw-bold">1 ETH</span>
                    <span className={sts.cardDescription}>price</span>
                  </li>
                  <li>
                    <span className="d-block fw-bold">100</span>
                    <span className={sts.cardDescription}>editions</span>
                  </li>
                  <li>
                    <span className="d-block fw-bold">1 day</span>
                    <span className={sts.cardDescription}>drops in</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Home;

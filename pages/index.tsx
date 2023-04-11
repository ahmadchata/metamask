import React from "react";
import sts from "@/styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <main className="text-white">
        <section className={`row mx-0 ${sts.sectionOne}`}>
          <div className="col-12 col-lg-5">
            <h1 className={`px-3 py-1 ${sts.homeTimer}`}>01:07:18</h1>
            <h1 className="mt-4">Exclusive Drop: Raven</h1>
            <p className="my-4">
              The world renowned experiential and mixed media artist is making
              her first drop, exclusively on Deep Dive. Enter for a chance to
              get one of Raven&apos;s first NFTs.
            </p>
            <button className="btn wallet_btn px-4 py-2">Connect Wallet</button>
          </div>
        </section>
        <section className={`row mx-0 ${sts.sectionTwo}`}>
          <div className="col-12 col-lg-5">
            <h1 className="mt-4">Into the Portal</h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
            </p>
          </div>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default Home;

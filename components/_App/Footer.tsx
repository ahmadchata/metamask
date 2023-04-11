import Image from "next/image";
import { socialData } from "@/store/data/socials";
import sts from "/styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`${sts.footer} row mx-0 align-items-center`}>
      <div className="col-12 col-lg-7">
        {socialData.map((data) => (
          <Image
            className="me-5"
            key={data.id}
            src={data.image}
            width={data.width}
            height={data.height}
            alt={data.alt}
          />
        ))}
      </div>
      <div className="col-12 col-lg row mx-0 mt-5 mt-lg-0">
        <div className="col">
          <h6 className="text-white">Marketplace</h6>
          <ul className={`${sts.footerList} list-unstyled`}>
            <li>Exclusive</li>
            <li>Browse</li>
            <li>Activity</li>
          </ul>
        </div>
        <div className="col">
          <h6 className="text-white">Create</h6>
          <ul className={`${sts.footerList} list-unstyled`}>
            <li>Mint an NFT</li>
            <li>Start a Collection</li>
          </ul>
        </div>
        <div className="col-5">
          <h6 className="text-white">Support</h6>
          <ul className={`${sts.footerList} list-unstyled`}>
            <li>How it Works</li>
            <li>Support Center</li>
            <li>Give Us Feedback</li>
            <li>Submit a Request</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

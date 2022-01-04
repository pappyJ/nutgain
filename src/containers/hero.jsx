import React from "react";
import logo from "../assets/svg/logo.svg";
import cup from "../assets/svg/cup.svg";
import fb from "../assets/svg/fb.svg";
import insta from "../assets/svg/in.svg";
import bg from "../assets/svg/bghead.svg";
import msg from "../assets/svg/mm.svg";
import linkdin from "../assets/svg/link.svg";
import squ from "../assets/svg/squ.svg";
import { Heading, SmText } from "../constant/styles/text";
import { paddingX } from "../constant/styles/spacing";
import { CountdownView } from "../components/countdown";
import { ScrollInRight } from "../constant/layout/animateOnScroll";

// button component
export const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full ring-2 ring-white hover:ring-0 hover:shadow-md text-primary-900 md:text-base
      transition ease-in  text-sm font-bold md:px-12 px-6  md:py-4 py-3 bg-primary-800`}
    >
      {children}
    </button>
  );
};

const style = {
  background: ` url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

// hero component
const Hero = () => {
  return (
    <div className="bg-dark-800">
      <div
        style={style}
        className={`${paddingX} flex flex-col gap-8 relative    py-12`}
      >
        <div className="flex flex-row  justify-between w-full items-center ">
          <img src={logo} alt="nutgain logo" className="h-12 w-32" />

          <a
            rel="noreferrer"
            href="https://online.flippingbook.com/view/956899460"
            target="_blank"
          >
            <Button>Whitepaper</Button>
          </a>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col gap-8">
            <Heading className="text-white">NutGain Ecosystem</Heading>
            <SmText className="text-primary-200">
              NutGain is a security protocol offering users and developers
              powerful tools including Web3, DeFi, Metaverse, NFT, Crypto
              Wallet, D-Hyper Ecommerce and dApps.
            </SmText>
            <CountdownView />
            <div className="flex gap-4 items-center">
              <Button>Buy Now</Button>
              <Button>Whitelist your Wallet</Button>
            </div>
            <div className="flex gap-2 items-center">
              {" "}
              <a
                rel="noreferrer"
                href="https://www.facebook.com/nutgain/"
                target="_blank"
              >
                <img
                  src={fb}
                  alt="insta"
                  className="md:h-20 md:w-20 h-12 w-12"
                />
              </a>
              <a
                rel="noreferrer"
                href="https://instagram.com/nutgainofficial/"
                target="_blank"
              >
                <img
                  src={insta}
                  alt="insta"
                  className="md:h-20 md:w-20 h-12 w-12"
                />
              </a>
              <a
                href="https://linkedin.com/company/nutgain"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkdin}
                  alt="linkdin logo"
                  className="md:h-20 md:w-20 h-12 w-12"
                />
              </a>
              <a
                href="https://nutgain.medium.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={msg}
                  alt="msg "
                  className="md:h-20 md:w-20 h-12 w-12"
                />
              </a>
              <a
                href="https://www.reddit.com/user/nutgainofficial"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={cup}
                  alt="cup "
                  className="md:h-20 md:w-20 h-12 w-12"
                />
              </a>
            </div>
            <div>
              <ScrollInRight>
                <img
                  src={squ}
                  alt="cup "
                  className=" absolute h-full w-full -bottom-20 -right-80 bg-no-repeat md:block hidden"
                />
              </ScrollInRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

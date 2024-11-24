import React from "react";
import classes from "./letsTalk.module.css";
import Image from "next/image";
import { Images } from "@/assets/Images";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
const LetsTalk = () => {
  return (
    <div className={classes.letsTalk}>
      <div className={classes.firstRing}>
        <Image
          src={Images.leftUpRing}
          alt="leftUpRing"
          className={classes.leftUpRing}
        />
      </div>
      <div className={classes.content}>
        <h1 className={classes.heading}>Let&apos;s Talk!</h1>
        <p className={classes.description}>
          Interested in working together or have a question? Feel free to reach
          out. I&apos;m here to help you turn your ideas into amazing digital
          realities. Looking forward to hearing from you soon!
        </p>
        <div className={classes.buttonList}>
          <button aria-label="email" className={classes.button}>
            <a className={classes.email} href="mailto:jhankevi@gmail.com">
              {<Image src={Images.email} alt="email" />}jhankevi@gmail.com
            </a>
          </button>
          <div className={classes.iconList}>
            <button aria-label="twitter" className={classes.button}>
              <a href="https://x.com/?lang=en"></a>
              <FaTwitter className={classes.icons} />
            </button>
            <button aria-label="instagram" className={classes.button}>
              <a href="https://www.instagram.com/">
                <IoLogoInstagram className={classes.icons} />
              </a>
            </button>
            <button aria-label="linkedin" className={classes.button}>
              <a href="https://www.linkedin.com/login/in">
                <FaLinkedinIn className={classes.icons} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className={classes.secondRing}>
        <Image
          src={Images.rightDownRing}
          alt="rightDownRing"
          className={classes.rightDownRing}
        />
      </div>
    </div>
  );
};

export default LetsTalk;

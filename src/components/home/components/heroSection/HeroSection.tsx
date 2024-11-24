import React from "react";
import classes from "./heroSection.module.css";
import Image from "next/image";
import { Images } from "@/assets/Images";
const HeroSection = () => {
  return (
    <div className={classes.heroSection}>
      <div className={classes.row1}>
        <Image
          src={Images.circle}
          alt="circleImage"
          className={classes.imageContainer}
        />
      </div>
      <div className={classes.row2}>
        <Image
          src={Images.polygon}
          alt="polygonImage"
          className={classes.imageContainer}
        />
        <Image
          src={Images.Ellipse}
          alt="EllipseImage"
          className={`${classes.imageContainer} ${classes.ellipse}`}
        />
        <Image
          src={Images.square}
          alt="squareImage"
          className={classes.imageContainer}
        />
      </div>
      <h1 className={classes.heading}>Hi, I&apos;m Jhan Gonzales</h1>
      <p className={classes.subTitle}>
        I&apos;m a passionate Product Designer focused on crafting remarkable
        digital experiences. My aim is to blend functionality and aesthetics to
        create impactful solutions
      </p>
    </div>
  );
};

export default HeroSection;

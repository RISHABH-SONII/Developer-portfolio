import React from "react";
import classes from "./cardSection.module.css";
import Image, { StaticImageData } from "next/image";

interface ICardProps {
  image: StaticImageData;
  heading: string;
  subHeading: string;
  description: string;
}
const CardSection: React.FC<ICardProps> = ({
  image,
  heading,
  subHeading,
  description,
}) => {
  return (
    <div className={classes.cardSection}>
      <div className={classes.column1}>
        <div className={classes.firstSection}>
          <h3 className={classes.cardHeading}>{heading}</h3>
          <p className={classes.cardSubTitle}>{subHeading}</p>
          <p className={classes.cardDescription}>{description}</p>
        </div>
        <div className={classes.secondSection}>
          <button className={classes.button}>Read case study</button>
        </div>
      </div>
      <div className={classes.column2}>
        <Image src={image} alt="card1Image" className={classes.images} />
      </div>
    </div>
  );
};

export default CardSection;

import React from "react";
import classes from "./workSection.module.css";
import CardSection from "./cardSection/CardSection";
import { CardData } from "./cardSection/cardData";
const WorkSection = () => {
  return (
    <div className={classes.workSection}>
      <h2 className={classes.heading}>My work</h2>
      <p className={classes.subTitle}>
        Here&apos;s a glimpse of some of my recent and exciting projects. Each
        of them reflects my focus on user-centered design and my commitment to
        excellence in user experience.
      </p>
      {CardData.map((item, index) => (
        <CardSection
          key={index}
          image={item.image}
          heading={item.heading}
          subHeading={item.subHeading}
          description={item.description}
        />
      ))}

      <button aria-label="seeAll" className={classes.seeAll}>
        see all projects
      </button>
    </div>
  );
};

export default WorkSection;

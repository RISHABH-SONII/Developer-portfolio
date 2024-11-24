import React from "react";
import classes from "./aboutSection.module.css";
import Image from "next/image";
import { Images } from "@/assets/Images";
import { GoDotFill } from "react-icons/go";
const AboutSection = () => {
  return (
    <div className={classes.aboutSection}>
      <h2 className={classes.heading}>About Me</h2>
      <div className={classes.firstSection}>
        <div className={classes.column1}>
          <p className={classes.description}>
            With over 4 years of experience in digital product design, I&apos;m
            passionate about creating engaging and functional solutions that
            meet users&apos; needs. My focus on user research and usability
            ensures that each design not only looks great but also delivers an
            exceptional experience
          </p>
        </div>
        <div className={classes.column2}>
          <Image
            src={Images.aboutSectionImage}
            alt="aboutImage"
            className={classes.aboutSectionImage}
          />
          <Image
            src={Images.hiImage}
            alt="hiImage"
            className={classes.hiImage}
          />
        </div>
      </div>
      <div className={classes.secondSection}>
        <h3 className={classes.headingSecond}>My skills</h3>
        <div className={classes.listContainer}>
          <ul className={classes.firstList}>
            <li className={classes.listItems}>
              {<GoDotFill className={classes.dot} />}User Interface (UI) Design
            </li>
            <li className={classes.listItems}>
              {<GoDotFill className={classes.dot} />}User Experience (UX) Design
            </li>
            <li className={classes.listItems}>
              {<GoDotFill className={classes.dot} />}Interactive Prototyping
            </li>
            <li className={classes.listItems}>
              {<GoDotFill className={classes.dot} />}User Research
            </li>
          </ul>
          <ul className={classes.secondList}>
            <li className={classes.listItems}>
              {<GoDotFill className={classes.dot} />}Interaction Design
            </li>
            <li className={classes.listItems}>
              {<GoDotFill className={classes.dot} />}Responsive Design
            </li>
            <li className={classes.listItems}>
              {<GoDotFill className={classes.dot} />}Adobe XD, Sketch, Figma
            </li>
            <li className={classes.listItems}>
              {<GoDotFill className={classes.dot} />}Team Collaboration
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

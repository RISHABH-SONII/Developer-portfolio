import React from "react";
import classes from "./notFound.module.css";
import Image from "next/image";
import { Images } from "@/assets/Images";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className={classes.notFoundContainer}>
      <Image
        className={classes.notFoundImage}
        src={Images.errorImage}
        alt="errorPageImage"
      />
      <p className={classes.goBack}>
        Go Back{" "}
        <Link className={classes.link} href="/">
          HOME
        </Link>
      </p>
    </div>
  );
}

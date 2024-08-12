import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saritha</h1>
        <p className={styles.description}>       
        Sr. Full Stack Developer with over 9 years of experience in enterprise application development, I focus on crafting user-friendly, 
        visually engaging applications that effectively represent brands and elevate user experiences.
        </p>
        <a href="mailto:sarithaguguloth38@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.ImageContainer}> 
      <img
        src={getImageUrl("hero/saritha.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

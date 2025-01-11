import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Tanuj Kulkarni</h1>
        <p className={styles.description}>
          I am a passionate Fullstack Engineer with 3 years of experience
          specializing in web, Android, and iOS development. My skill set also
          extends to software security, embedded systems, and IoT, allowing me
          to work across a variety of technical domains. I thrive on solving
          complex problems and creating innovative solutions. If you're
          interested in collaborating or learning more about my work, feel free
          to reach out!
        </p>
        <a className={styles.contactBtn} href="mailto:tanuj21199@gmail.com">
          Contact me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Him"
      />
      <div className={styles.topBlur} />
      <div className={styles.BottomBlur} />
    </section>
  );
};

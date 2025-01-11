import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectsCard.module.css";
export const ProjectsCard = ({
  project: { title, imageSrc, description, skills, demo, source, showSource },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      {showSource ? (
        <div className={styles.links}>
          <a href={source} className={styles.link}>
            Source
          </a>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursorIcon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Developed a robust frontend mobile solution for Android and iOS
                using Kotlin Multiplatform, including integration of hardware
                such as printers, scanners, and card readers. Also integrated
                third-party payment services. Additionally, gained experience
                developing multiple responsive websites using React and Angular
                for live projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursorIcon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Experienced in designing, building, updating, and deploying
                services within a microservices architecture using Node.js and
                Spring Boot. Expertise includes database design and integration,
                socket connections, utilizing web services from GCP, and
                deploying services to both cloud and private servers. Proficient
                in creating applications with REST, GraphQL, and Pub/Sub
                connections as entry points.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devopsIcon.png")} alt="cursorIcon" />
            <div className={styles.aboutItemText}>
              <h3>Devops</h3>
              <p>
                Beginner to intermediate experience with Docker and Kubernetes,
                including containerization of applications, managing
                containerized environments, and orchestrating deployments using
                Kubernetes. Familiar with creating and managing Docker images,
                as well as setting up and maintaining Kubernetes clusters for
                scaling and managing applications efficiently.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/networkIcon.png")} alt="networkIcon" />
            <div className={styles.aboutItemText}>
              <h3>Computer Networks and System Tools</h3>
              <p>
                Experience with TCP/IP, DNS, DHCP, NAT, IPv4, and SSH, along
                with expertise in socket programming and network security.
                Proficient in using tools like Wireshark and Nmap for network
                analysis, and familiar with creating Yara rules for threat
                detection. Skilled in automating tasks using cron jobs for
                scheduling system processes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

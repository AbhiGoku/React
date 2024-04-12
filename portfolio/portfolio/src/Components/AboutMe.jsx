import styles from "./AboutMe.module.css";
import me from "./my.jpg";
import { Image } from "@chakra-ui/image";

function AboutMe() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img src={me} alt="Abhishek Image" className={styles.image} />
        <div className={styles.overlay}>My Name is Abhishek</div>
      </div>

      <div className={styles.information}>
        <h1 className="heading"> ABOUT ME</h1>
        <div>
          👋 Hello! I'm Abhishek L S, an enthusiastic and results-driven
          professional with a passion for Computer Science Field. 🚀 🎓
          Education: I am currently pursuing my Master's in Computer And
          Information Science from Indiana University and Purdue University,
          Indianapolis 💼 Professional Experience: With 3 years of experience in
          IT field, I have had the privilege of contributing to Lowe's India as
          an intern, associate software engineer and software Engineer. My
          journey has allowed me to specialize in Java spring boot, docker, ELK
          and many other technologies 🔍 Skills: Technical Skills: Java Spring
          boot, Agile Methodologies, Junit Testing, Github Soft Skills:
          Excellent Communication, Team Collaboration, Adaptability,
          Problem-solving, Leadership 🏆 Achievements: I take pride in
          mentioning that I received a spot award for my contribution in Lowe's
          India during my 3 years in the company. Whether it's promotion or spot
          awards,
          <br /> I am dedicated to delivering excellence in every project I
          undertake. 🤝 Networking: I'm passionate about building meaningful
          professional connections. Let's connect and explore potential
          collaborations, industry insights, or simply share experiences in
          field of full Stack. 🌐 Interests: Outside of the professional realm,
          I'm fascinated by reading books, sports and fitness. Whether it's
          reading or fitness, I believe in maintaining a well-rounded approach
          to life.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

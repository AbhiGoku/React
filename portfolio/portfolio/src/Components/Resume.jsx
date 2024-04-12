import file from "./resume.pdf";
import styles from "./Resume.module.css";

function Resume() {
  return (
    <>
      <div className={styles.pdf}>
        <embed src={file} width="800px" height="2100px" />
      </div>
    </>
  );
}

export default Resume;

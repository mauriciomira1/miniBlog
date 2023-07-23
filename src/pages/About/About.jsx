// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import myPhoto from "./mauricio.jpg";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <strong>BLOG</strong>
      </h2>
      <p>
        Este é um projeto de Blog criado por{" "}
        <a
          href="https://www.instagram.com/mauriciomira1"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Maurício Miranda</strong>
        </a>{" "}
        com React no front-end e Firebase no Back-end.
      </p>

      <img src={myPhoto} alt="Maurício Miranda" />
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;

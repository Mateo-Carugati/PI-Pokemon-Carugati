import React from "react";
import style from "./about.module.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className={style.aboutMe_container}>
      <h2 className={style.aboutMe_title}>Acerca de mí</h2>
      <p className={style.aboutMe_content}>Hola, soy Mateo Carugati. Tengo 19 años, y nací en Argentina. Soy un programador Full Stack y esta página es mi proyecto individual para presentar en mi ultima etapa de SoyHenry.<br></br>
      En esta página encontrarás información sobre los Pokémon, podrás ver sus estadísticas y hasta crear tu propio Pokémon.</p>
      <p className={style.centeredText}>MIS PROYECTOS <br />
        <a href="https://github.com/Mateo-Carugati" target="_blank" rel="noopener noreferrer">
          <img src="imagenes/github.png" alt="GitHub" className={style.githubIcon} />
        </a>
      </p>
      <p className={style.oppositeText}>CONTACTO <br />
        <a href="https://www.linkedin.com/in/mateo-fidel-carugati-8625b4272/" target="_blank" rel="noopener noreferrer">
          <img src="imagenes/linked.png" alt="LinkedIn" className={style.linkedIcon} />
        </a>
      </p>

      <button className={style.homeButton}>
        <Link to="/home">Regresar</Link>
      </button>

    </div>
  );
};

export default AboutMe;

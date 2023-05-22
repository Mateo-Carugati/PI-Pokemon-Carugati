import React from "react";
import { Link } from "react-router-dom";

import style from "./landing.module.css";

const Landing = () => {
    return (
        <section className={style.landing}>
            <div className={style.container}>

                <div className={style.landing_group}>
                    <h1 className={style.landing_title}>¡Bienvenido a la Pokedex!</h1>
                    <p className={style.landing_leyend}>¡Encuentra información de tus Pokemon favoritos!</p>
                </div>

                <Link to="/home" className={style.landing_link}>INGRESAR</Link>

            </div>    
        </section>
    )
}



export default Landing;
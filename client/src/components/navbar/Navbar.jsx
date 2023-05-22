import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import style from "./navbar.module.css";


const Navbar = ({ handleChange, handleSubmit }) => {
    return (
        <nav className={style.bar}>
            <div className={style.container}>

                <section className={style.bar_collap}>
                    <Link to="/" className={style.bar_brand}><img src={logo} alt="logo" /></Link>

                    <ul className={style.menu}>
                        <li className={style.menu_item}><Link to="/home" className={style.menu_link}>Inicio</Link></li>
                        <li className={style.menu_item}><Link to="/about" className={style.menu_link}>Acerca de mí</Link></li>
                        <li className={style.menu_item}><Link to="/add-pokemon" className={style.menu_link}>Registrar Pokemon</Link></li>
                    </ul>


                    <form className={style.form_menu} onChange={handleChange}>
                        <input type="search" placeholder="Busqueda" />
                        <button type="submit" onClick={handleSubmit}>Buscar</button>
                    </form>

                </section>
            </div>
        </nav>
    )
};


export default Navbar;

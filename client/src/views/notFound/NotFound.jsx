import React from "react";
import { Link } from "react-router-dom";

import style from "./notFound.module.css";

const NotFound = () => {
    return (
        <div className={style.notfound}>
            <h1>ERROR 404: NOT FOUND</h1>
            <Link to="/home">REGRESAR</Link>
        </div>
    )
};


export default NotFound;

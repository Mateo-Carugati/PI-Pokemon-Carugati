import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getById } from "../../redux/actions";
import Navbar from "../../components/navbar/Navbar";

import style from "./detail.module.css";

const Detail = (props) => {
  const dispatch = useDispatch();
  const detailPokemon = useSelector((state) => state.detailPokemon);
  const { name, image, types, stats } = detailPokemon;

  const id = props.match.params.id;
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const getTypeClass = (type) => {
    switch (type) {
      case "grass":
        return style.grass;
      case "fire":
        return style.fire;
      case "water":
        return style.water;
      case "bug":
        return style.bug;
      case "normal":
        return style.normal;
      case "electric":
        return style.electric;
      case "fighting":
        return style.fighting;
      case "flying":
        return style.flying;
      case "poison":
        return style.poison;
      case "ground":
        return style.ground;
      case "rock":
        return style.rock;
      case "psychic":
        return style.psychic;
      case "ice":
        return style.ice;
      case "ghost":
        return style.ghost;
      case "dragon":
        return style.dragon;
      case "dark":
        return style.dark;
      case "steel":
        return style.steel;
      case "fairy":
        return style.fairy;
      // Agrega más casos según los tipos que tengas en tu aplicación
      default:
        return "";
    }
  };

  return (
    <div className={style.detail_pokemon}>
      <Navbar />
      <h1 className={style.detail_title}>Información del Pokémon</h1>

      <div className={style.detail_content}>
        {detailPokemon.id ? (
          <article className={style.detail_info}>
            <h2 className={style.detail_name}>{name}</h2>
            <h3 className={style.detail_type_label}>Tipo: </h3>
            <div className={style.detail_types}>
              {types?.map((type, index) => (
                <span key={index} className={`${style.detail_type} ${getTypeClass(type)}`}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              ))}
            </div>
            <div className={style.detail_stats}>
              <div className={style.detail_stats_label}>Estadísticas: </div>
              {Object.entries(stats || {}).map(([key, value]) => (
                <div key={key} className={style.detail_stat}>
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </article>
        ) : (
          <h3 className={style.detail_error}>
            Error, el Pokémon con la ID "{id}" no fue encontrado.
          </h3>
        )}

        <div className={style.detail_img}>
          <img src={image} alt={name} />
          <Link to="/home" className={style.detail_link}>
            REGRESAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;

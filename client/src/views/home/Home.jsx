import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getByName } from "../../redux/actions";

import Navbar from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";

import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  // Traemos todos los pokemons
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  // Filtramos los usuarios por nombre (filtrado por backend)
  const [search, setSearch] = useState("");
  const handleChange = (evt) => {
    evt.preventDefault(); // Para que no se recargue la página
    setSearch(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getByName(search));
  };

  return (
    <div className={style.home}>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <h1 className={style.home_title}>¡Gotta catch'em all!</h1>

      <Cards allPokemons={allPokemons} />
    </div>
  );
};

export default Home;

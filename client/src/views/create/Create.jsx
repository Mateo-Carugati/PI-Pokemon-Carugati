import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import style from "../create/create.module.css";
import { createPokemon } from "../../redux/actions/index"; // Importa la función de envío al servidor desde el archivo api.js

function PokemonCreate() {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: null,
    health: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPokemonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPokemonData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleTypeChange = (event) => {
    const selectedTypes = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setPokemonData((prevData) => ({
      ...prevData,
      types: selectedTypes,
    }));
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleTypeSelect = (type) => {
    const selectedTypes = [...pokemonData.types];
    if (selectedTypes.includes(type)) {
      // Remove the type if it's already selected
      const index = selectedTypes.indexOf(type);
      selectedTypes.splice(index, 1);
    } else {
      // Add the type if it's not selected
      selectedTypes.push(type);
    }
    setPokemonData((prevData) => ({
      ...prevData,
      types: selectedTypes,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envía los datos del nuevo Pokémon al servidor utilizando la función createPokemon
      await createPokemon(pokemonData);

      // Limpia el formulario y redirige a la página de inicio
      setPokemonData({
        name: "",
        image: null,
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
      });
      history.push("/home");
    } catch (error) {
      console.log("Error al crear el Pokémon:", error);
    }
  };

  return (
    <div className={style.pokemonCreateContainer}>
      <h2>¡Crea un Pokémon!</h2>
      <form className={style.pokemonForm} onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={pokemonData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <div className={style.imageInput}>
          <label htmlFor="image">
            Imagen:
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </label>
          <span className={style.imageURL}>
            {pokemonData.image && pokemonData.image.name}
          </span>
          {pokemonData.image && (
            <div className={style.imagePreview}>
              <img
                src={URL.createObjectURL(pokemonData.image)}
                alt="Pokemon"
                className={style.previewImage}
              />
            </div>
          )}
        </div>
        <br />
        <label>
          Salud:
          <input
            type="number"
            name="health"
            value={pokemonData.health}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Ataque:
          <input
            type="number"
            name="attack"
            value={pokemonData.attack}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Defensa:
          <input
            type="number"
            name="defense"
            value={pokemonData.defense}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Velocidad:
          <input
            type="number"
            name="speed"
            value={pokemonData.speed}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Altura:
          <input
            type="number"
            name="height"
            value={pokemonData.height}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Peso:
          <input
            type="number"
            name="weight"
            value={pokemonData.weight}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Tipos:
          <br />
          <div className={`${style.dropdown} ${style.dropdownUp}`}>
            <button
              type="button"
              className={style.dropdownButton}
              onClick={handleDropdownToggle}
            >
              {pokemonData.types.length > 0 ? (
                pokemonData.types.join(", ")
              ) : (
                "Elige los tipos"
              )}
            </button>
            {isDropdownOpen && (
              <ul className={style.dropdownMenu}>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("fire")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("fire")}
                    readOnly
                  />
                  Fire
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("water")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("water")}
                    readOnly
                  />
                  Water
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("grass")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("grass")}
                    readOnly
                  />
                  Grass
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("electric")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("electric")}
                    readOnly
                  />
                  Electric
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("ice")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("ice")}
                    readOnly
                  />
                  Ice
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("fighting")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("fighting")}
                    readOnly
                  />
                  Fighting
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("poison")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("poison")}
                    readOnly
                  />
                  Poison
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("ground")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("ground")}
                    readOnly
                  />
                  Ground
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("flying")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("flying")}
                    readOnly
                  />
                  Flying
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("psychic")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("psychic")}
                    readOnly
                  />
                  Psychic
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("bug")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("bug")}
                    readOnly
                  />
                  Bug
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("rock")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("rock")}
                    readOnly
                  />
                  Rock
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("ghost")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("ghost")}
                    readOnly
                  />
                  Ghost
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("dragon")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("dragon")}
                    readOnly
                  />
                  Dragon
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("dark")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("dark")}
                    readOnly
                  />
                  Dark
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("steel")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("steel")}
                    readOnly
                  />
                  Steel
                </li>
                <li
                  className={style.dropdownMenuItem}
                  onClick={() => handleTypeSelect("fairy")}
                >
                  <input
                    type="checkbox"
                    checked={pokemonData.types.includes("fairy")}
                    readOnly
                  />
                  Fairy
                </li>
              </ul>
            )}
          </div>
        </label>
        <br />
        <button type="submit" className={style.submitButton}>
          REGISTRAR
        </button>
      </form>
      <Link to="/" className={style.homeLink}>
        REGRESAR
      </Link>
    </div>
  );
}

export default PokemonCreate;

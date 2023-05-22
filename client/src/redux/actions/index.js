import axios from 'axios';
import {
  GET_POKEMONS,
  BY_NAME,
  BY_ID,
  CREATE_POKEMON,
  UPDATE_POKEMON,
  DELETE_POKEMON,
  GET_TYPES
} from "./actions-types";

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pokemon");
      const pokemons = response.data; // Arreglo de Pokémon
      return dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      console.error(error);
    }
  };
};


export const getByName = (name) => {
  return async (dispatch) => {
    try {
      const response = (await axios.get(`http://localhost:3001/pokemon?name=${name}`)).data;
      return dispatch({
        type: BY_NAME,
        payload: response,
      });
    } catch (err) {
      alert(`¡Ups! El Pokémon ${name} no existe`);
    }
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    const response = (await axios.get(`http://localhost:3001/pokemon/${id}`)).data;

    return dispatch({
      type: BY_ID,
      payload: response,
    });
  };
};

export const createPokemon = (pokemonData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/pokemon", pokemonData);
      const createdPokemon = response.data; // Pokémon creado
      return dispatch({
        type: CREATE_POKEMON,
        payload: createdPokemon,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updatePokemon = (id, pokemonData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:3001/pokemon/${id}`, pokemonData);
      console.log(response.data);
      return dispatch({
        type: UPDATE_POKEMON,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deletePokemon = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:3001/pokemon/${id}`);
      console.log(response.data);
      return dispatch({
        type: DELETE_POKEMON,
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getTypes = () => {
  return function (dispatch) {
      axios.get('/types')
      .then(response => {
          // console.log(response);
          dispatch({
              type: GET_TYPES,
              payload: response.data,
          });
      })
      .catch(error => {
          console.log(error);
      });
  };
};
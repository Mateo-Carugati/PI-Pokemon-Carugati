import {
    GET_POKEMONS,
    BY_NAME,
    BY_ID,
    CREATE_POKEMON,
    UPDATE_POKEMON,
    DELETE_POKEMON
  } from "../actions/actions-types";
  
  const initialState = {
    allPokemons: [],
    pokemonsCopy: [], // hace una copia de todos los pokemons, con esto podemos volver al estado original
    detailPokemon: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POKEMONS:
        return {
          ...state,
          allPokemons: action.payload,
          pokemonsCopy: action.payload,
        };
      case BY_NAME:
        return {
          ...state,
          allPokemons: action.payload,
        };
      case BY_ID:
        return {
          ...state,
          detailPokemon: action.payload,
        };
      case CREATE_POKEMON:
        return {
          ...state,
          allPokemons: [...state.allPokemons, action.payload],
        };
      case UPDATE_POKEMON:
        return {
          ...state,
          allPokemons: state.allPokemons.map(pokemon =>
            pokemon.id === action.payload.id ? action.payload : pokemon
          ),
        };
      case DELETE_POKEMON:
        return {
          ...state,
          allPokemons: state.allPokemons.filter(pokemon => pokemon.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
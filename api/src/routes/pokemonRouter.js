const { Router } = require('express');
const {
    getPokemonsHandler,
    getPokemonsByIdHandler,
    createPokemonHandler
} = require("../handlers/pokemonHandler");

const pokemonRouter = Router();

pokemonRouter.get("/", getPokemonsHandler);
pokemonRouter.get("/:id", getPokemonsByIdHandler);
pokemonRouter.post("/create", createPokemonHandler);


module.exports = pokemonRouter;

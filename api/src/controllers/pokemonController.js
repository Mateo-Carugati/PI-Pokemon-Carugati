const { Pokemon, Type } = require('../db');
const axios = require('axios');


const getPokemonApi = async () => {
    const arrPockemon = []; // para agregar los pokemones de la api
    const pockemons = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')).data.results;

    for (let pokemon of pockemons) {
        const el = (await axios.get(pokemon.url)).data;

        arrPockemon.push({
            id: el.id,
            name: el.name,
            image: el.sprites.other.dream_world.front_default,
            life: el.stats[0].base_stat,
            attack: el.stats[1].base_stat,
            defense: el.stats[2].base_stat,
            speed: el.stats[5].base_stat,
            height: el.height,
            weight: el.weight,
            types: el.types.map(type => type.type.name),
        });
    };
    return arrPockemon;
}

const getPokemonsDb = async () => {
    const pokemons = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
        }
    });
    return pokemons;
}

const getAllPokemons = async (name) => {
    const apiPokemons = await getPokemonApi();
    const dbPokemons = await getPokemonsDb();

    const allPokemons = apiPokemons.concat(dbPokemons);

    if (name) {
        const pokeName = allPokemons.filter(poke => poke.name.toLowerCase().includes(name.toLowerCase()));
        if (pokeName.length) return pokeName;
    } else {
        return allPokemons;
    }
}











const getPokemonById = async (id) => {
    if (isNaN(id)) {
        return await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ['name'],
            }
        });
    }

    const pokeApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
    return {
        id: pokeApi.id,
        name: pokeApi.name,
        image: pokeApi.sprites.other.dream_world.front_default,
        life: pokeApi.stats[0].base_stat,
        attack: pokeApi.stats[1].base_stat,
        defense: pokeApi.stats[2].base_stat,
        speed: pokeApi.stats[5].base_stat,
        height: pokeApi.height,
        weight: pokeApi.weight,
        types: pokeApi.types.map(type => type.type.name),
    };
};


const createPokemonDB = async (id, name, image, life, attack, defense, speed, height, weight ) => {
    return await Pokemon.create({
        id,
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight
    });
};




module.exports = {
    getAllPokemons,
    getPokemonById,
    createPokemonDB,
}

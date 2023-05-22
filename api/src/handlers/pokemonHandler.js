const {
    getAllPokemons,
    getPokemonById,
    createPokemonDB,
} = require("../controllers/pokemonController")


const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;

    try {
        if (name) {
            const pokemons = await getAllPokemons(name);
            if (!pokemons) return res.status(404).json({ message: "No se encontro el pokemon " + name});
            return res.status(200).json(pokemons);
        }
        const pokemons = await getAllPokemons();
        return res.status(200).json(pokemons);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const getPokemonsByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await getPokemonById(id);
        if (!response) return res.status(404).json({ message: "Pokemon not found" });
        return res.status(200).json(response);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const createPokemonHandler = async (req, res) => {
    const { id, name, image, life, attack, defense, speed, height, weight } = req.body

    try {
        if (name && image && life && attack && defense && speed && height && weight) {
            const response = await createPokemonDB(id, name, image, life, attack, defense, speed, height, weight);
            return res.status(200).json(response);
        } else {
            throw new Error("Faltan datos para crear al pokemon")
        }

    } catch (err) {
        return res.status(400).json({message: err.message});
    }
}



module.exports = {
    getPokemonsHandler,
    getPokemonsByIdHandler,
    createPokemonHandler,
}
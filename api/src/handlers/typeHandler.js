const {
    getAllTypes,
} = require("../controllers/typeController");


const getTypesHandler = async (req, res) => {
    try {
        const types = await getAllTypes();
        return res.status(200).json(types);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    getTypesHandler,
}
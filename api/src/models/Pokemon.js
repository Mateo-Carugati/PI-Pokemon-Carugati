const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    // ID
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    // Nombre
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Imagen
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Vida
    life: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Ataque
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Defensa
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Velocidad
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Altura
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Peso
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
};

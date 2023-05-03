const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    imagen:{
      type: DataTypes.STRING,
      allowNull: false
    },
    altura:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    peso:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    aDeVida:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

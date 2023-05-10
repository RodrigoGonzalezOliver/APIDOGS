const axios = require("axios");

const getTemperaments = async (req, res) => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const temperaments = new Set(); // Utilizamos un conjunto para almacenar los temperamentos únicos

    response.data.forEach((breed) => {
      const breedTemperaments = breed.temperament ? breed.temperament.split(",") : [];
      breedTemperaments.forEach((temperament) => temperaments.add(temperament.trim()));
    });

    const uniqueTemperaments = [...temperaments]; // Convertimos el conjunto a un array

    const temperamentsArray = uniqueTemperaments.map((temperament) => {
      return { temperament };
    });

    res.json(temperamentsArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los temperamentos" });
  }
};

module.exports = { getTemperaments };
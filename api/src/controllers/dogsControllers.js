const axios = require("axios");

const getAllDogs = async (req, res) => {
    try {

      const response = await axios.get('https://api.thedogapi.com/v1/breeds');

      const dogs = response.data.map((dog) => {
        return {
          id: dog.id,
          imagen: dog.image.url,
          nombre: dog.name,
          altura: `${dog.height.metric} cm`,
          peso: `${dog.weight.metric} kg`,
          añosDeVida: `${dog.life_span} años`
        };
      });

      res.json(dogs);
    } catch (error) {
      console.error(error);

      res.status(500).json({ message: 'Error al obtener las razas de perros' });
    }
  };

module.exports = {getAllDogs};
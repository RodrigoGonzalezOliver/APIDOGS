 const axios = require("axios");
 const {Op} = require("sequelize");

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
         añosDeVida: `${dog.life_span} años`,
         temperament: `${dog.temperament}`
       };
     });

     res.json(dogs);
   } catch (error) {
     console.error(error);

     res.status(500).json({ message: 'Error al obtener las razas de perros' });
   }
 };

 const getDogId = async (req, res) => {
  const { idRaza } = req.params;
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`);
    const breed = response.data;

    if (breed) {
      const temperaments = breed.temperament.split(',').map((t) => t.trim()); // Separar y mapear los temperamentos
      console.log(breed)
      const dogDetail = {
        id: breed.id,
        imagen: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`,
        nombre: breed.name,
        altura: `${breed.height.metric} cm`,
        peso: `${breed.weight.metric} kg`,
        añosDeVida: `${breed.life_span} `,
        temperaments: temperaments,
      };

      res.send(dogDetail);
    } else {
      res.status(404).json({ message: 'Raza no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el detalle de la raza' });
  }
};

// const getDogId = async (req, res) => {
//   try {
//     // Buscar por id de raza.
//     const { idRaza } = req.params;
//     const allBreeds = await getAllDogs();
//     const breedById = allBreeds.filter((breed) => breed.id == idRaza);
//     breedById.length
//         ? res.status(200).send(breedById)
//         : res.status(404).send('Breed not found');
// } catch (error) {
//     res.status(400).send('Error en el servidor');
// }
// };

const createDog = async (req, res) => {
  try {
    const { id, imagen, nombre, altura, peso, añosDeVida, temperaments } = req.body;

    const dogDetail = {
      id,
      imagen,
      nombre,
      altura,
      peso,
      añosDeVida,
      temperaments
    };

    res.status(201).json(dogDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el perro' });
  }
};

const getBreedsName = async (req, res) => {
  try {
    // Buscar por nombre de raza.
    const { name } = req.query;
    const allBreeds = await getAllDogs();
    if (!name) return res.status(200).send(allBreeds);
    // Buscamos los que coincidan pro nombre.
    const breedsByName = allBreeds.filter((breed) =>
        breed.name.toLowerCase().includes(name.toLowerCase())
    );
    // Verificamos respuesta de array vacio.
    breedsByName.length
        ? res.status(200).send(breedsByName)
        : res.status(404).send('Breed not found');
} catch (error) {
    res.status(400).send('Error en el servidor');
}
};

module.exports = {getAllDogs, getDogId, createDog, getBreedsName};
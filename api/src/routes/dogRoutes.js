const {Router} = require("express");
const {getAllDogs, getDogId, createDog, getBreedsName} = require ("../controllers/dogsControllers");
const {getTemperaments} = require ("../controllers/Temperaments");
const router = Router();

router.get("/dogs", getAllDogs);
router.get("/temperaments", getTemperaments);
router.get('/dogs/name',getBreedsName);
router.get("/dogs/:idRaza", getDogId);
router.post("/dogs/createDog",createDog);

module.exports = router;
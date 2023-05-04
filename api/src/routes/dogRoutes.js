const {Router} = require("express");
const {getAllDogs, getDogById} = require ("../controllers/dogsControllers");
const router = Router();

router.get("/dogs", getAllDogs);
router.get("/dogs/:idRaza", getDogById);

module.exports = router;
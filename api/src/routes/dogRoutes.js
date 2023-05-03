const {Router} = require("express");
const {getAllDogs} = require ("../controllers/dogsControllers");
const router = Router();

router.get("/dogs", getAllDogs);

module.exports = router;
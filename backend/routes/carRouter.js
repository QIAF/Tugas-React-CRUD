const { getAllCars, createCar, editCar, deleteCar, updateCar } = require("../controllers/carController");

const router = require ("express").Router();

router.get("/", getAllCars);
router.post("/create", createCar);
router.patch("/update/:id", updateCar);
router.delete("/delete/:id", deleteCar);

module.exports = router;

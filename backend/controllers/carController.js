const createHttpError = require ('http-errors');
const {Car} = require("../models");

const getAllCars = async (req,res) => {
    try {

        const cars = await Car.findAll();

        res.status(200).json({
            status: true,
            message:'all cars retrieved succesfully',
            data: cars,
        });
    } catch (err) {
        next(createHttpError(400, {message:err.message}));

    }
};

const createCar = async (req, res) => {
    const {carName, price, type} = req.body;
    try {
        const data = req.body;
        const car = await  Car.create(data);

        res.status(201).json({
            status:201,
            data: car,
        });

    } catch (err) {
        res.status(201).json({
            status:400,
            message: err.message,
        })
    }
};

const updateCar = async (req, res) => {
    try {
        await Car.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(201).json({
            status:201,
            message: "Car successfully updated",
        });
    } catch (err) {
        res.status(201).json({
            status:400,
            message: err.message,
        })
    }
};
const deleteCar = async (req, res) => {
    try {
        await Car.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(201).json({
            status:201,
            message: "Car deleted successfully"
        });

    } catch (err) {
        res.status(201).json({
            status:400,
            message: err.message,
        })

    }
};
module.exports = {
    getAllCars,
    createCar,
    updateCar,
    deleteCar,
};
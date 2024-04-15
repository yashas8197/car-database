const { initializeDatabase } = require("./db/db.connect");

const fs = require("fs");

const Car = require("./models/car.models");

initializeDatabase();

const jsonData = fs.readFileSync("car.json", "utf8");

const carsData = JSON.parse(jsonData);

function seedData() {
  try {
    for (const carData of carsData) {
      const newCar = new Car({
        brand: carData.brand,
        model: carData.model,
        year: carData.year,
        bodyStyle: carData.bodyStyle,
        fuelType: carData.fuelType,
        transmission: carData.transmission,
        engine: carData.engine,
        mileage: carData.mileage,
        color: carData.color,
        price: carData.price,
        condition: carData.condition,
        description: carData.description,
      });
      newCar.save();
      console.log("MovieData", newCar.brand);
    }
  } catch (error) {
    console.log("Error seeding the data", error);
  }
}

seedData();

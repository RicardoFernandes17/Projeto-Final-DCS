module.exports = app => {
    const cities = require("../controllers/city.controller.js");

    // Create a new user
    app.post("/cities", cities.create);
  
    // Retrieve all users
    app.get("/cities", cities.findAll);
  
    // Retrieve a single user with userId
    app.get("/cities/:cityId", cities.findOne);
  
    // Update a user with userId
    app.put("/cities/:cityId", cities.update);
  
    // Delete a user with userId
    app.delete("/cities/:cityId", cities.delete);
  
    // Create a new user
    app.delete("/cities", cities.deleteAll);
  };
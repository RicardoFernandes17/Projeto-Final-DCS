const login = require("../middleware/login.js");

module.exports = (app) => {
  const sugestedItineraries = require("../controllers/sugesteditineraries.controller.js");
  // Create a new user
  app.post("/sugesteditineraries", sugestedItineraries.create);

  // Retrieve all users
  app.get("/sugesteditineraries", login, sugestedItineraries.findAll);

  // Retrieve a single user with userId
  app.get("/sugesteditineraries/:itineraryId", sugestedItineraries.findOne);

  // Update a user with userId
  app.put("/sugesteditineraries/:itineraryId", sugestedItineraries.update);

  // Delete a user with userId
  app.delete("/sugesteditineraries/:itineraryId", sugestedItineraries.delete);

  // Delete all  users
  app.delete("/sugesteditineraries", sugestedItineraries.deleteAll);
};

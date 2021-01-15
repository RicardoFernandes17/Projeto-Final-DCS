const login = require("../middleware/login.js");

module.exports = (app) => {
  const itineraries = require("../controllers/createItinerario.controller.js");
  // Create a new user
  app.post("/itineraries", itineraries.create);

  // Retrieve all users
  app.get("/itineraries", itineraries.findAll);

  // Retrieve a single user with userId
  app.get("/itineraries/:itineraryId", itineraries.findOne);

  // Update a user with userId
  app.put("/itineraries/:itineraryId", itineraries.update);

  // Delete a user with userId
  app.delete("/itineraries/:itineraryId", itineraries.delete);

  // Delete all  users
  app.delete("/itineraries", itineraries.deleteAll);
};

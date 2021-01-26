module.exports = (app) => {
  const rating = require("../controllers/rating.controller.js");
  // Create a new user
  app.post("/reviews", rating.create);

  // Retrieve all users
  app.get("/reviews", rating.findAll);

  app.get("/topReviews", rating.Average);

  // Delete all  users
};

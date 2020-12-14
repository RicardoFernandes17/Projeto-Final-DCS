const { JsonWebTokenError } = require("jsonwebtoken");
const login = require("../middleware/login.js");

module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  // Create a new user
  app.post("/users", users.create);

  // Retrieve all users
  app.get("/users", users.findAll);

  // Retrieve a single user with userId
  app.get("/users/:userId", users.findOne);

  // Update a user with userId
  app.put("/users/:userId", users.update);

  // Delete a user with userId
  app.delete("/users/:userId", users.delete);

  // Delete all  users
  app.delete("/users", users.deleteAll);

  //Login a user
  app.post("/login", users.login);

  app.get("/profile", login, (req, res, next) => {
    /* Como passar o user para o front end */
    console.log(req.user);
  });
};

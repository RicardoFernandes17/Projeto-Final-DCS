const City = require("../models/cities.model.js");

// Create and Save a new City
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  // Create a User
  const city = new City({
    name: req.body.city_name,
  });

  // Save City in the database
City.create(city, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the City."
      });
    else res.send(data);
  });
};

// Retrieve all Cities from the database.

exports.findAll = (req, res) => {
    City.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cities."
        });
      else res.send(data);
    });
  };

  // Find a single City with a cityId
exports.findOne = (req, res) => {
    City.findById(req.params.cityId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found city with id ${req.params.cityId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving city with id " + req.params.cityId
          });
        }
      } else res.send(data);
    });
  };
   // Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    
    const city = new City({
        name: req.body.city_name,
      });
    City.updateById(
        req.params.cityId,
        city,
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found City with id ${req.params.cityId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating city with id " + req.params.cityId
              });
            }
          } else res.send(data);
        }
      );
    };
     
    // Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
    City.remove(req.params.cityId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found City with id ${req.params.cityId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete City with id " + req.params.cityId
          });
        }
      } else res.send({ message: `User was deleted successfully!` });
    });
  };

  // Delete all Customers from the database.
exports.deleteAll = (req, res) => {
    City.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all cities."
        });
      else res.send({ message: `All Cities were deleted successfully!` });
    });
  };

  
const SugestedItinerary = require("../models/sugesteditineraries.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  if (!req) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a User
  const itinerary = new SugestedItinerary({
    name: req.body.name,
    accommodation: req.body.accommodation,
    city: req.body.city,
    breakfast: req.body.breakfast,
    morningActivity: req.body.morningActivity,
    lunch: req.body.lunch,
    activityAfterLunch: req.body.activityAfterLunch,
    dinner: req.body.dinner,
    nightActivity: req.body.nightActivity,
  });

  // Save User in the database
  SugestedItinerary.create(itinerary, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Itinerary.",
      });
    else res.send(data);
  });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  SugestedItinerary.getAll((err, data) => {
    if ((!req, err))
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Itineraries.",
      });
    else res.send(data);
  });
};

// Find a single User with a userId
exports.findOne = (req, res) => {
  SugestedItinerary.findById(req.params.itineraryId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found itinerary with id ${req.params.itineraryId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving itinerary with id " + req.params.itineraryId,
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
      message: "Content can not be empty!",
    });
  }

  const itinerary = new SugestedItinerary({
    name: req.body.name,
    accommodation: req.body.accommodation,
    city: req.body.city,
    breakfast: req.body.breakfast,
    morningActivity: req.body.morningActivity,
    lunch: req.body.lunch,
    activityAfterLunch: req.body.activityAfterLunch,
    dinner: req.body.dinner,
    nightActivity: req.body.nightActivity,
  });
  SugestedItinerary.updateById(
    req.params.itineraryId,
    itinerary,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found itinerary with id ${req.params.itineraryId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating itinerary with id " + req.params.itineraryId,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  SugestedItinerary.remove(req.params.itineraryId, (err) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found itinerary with id ${req.params.itineraryId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Could not delete itinerary with id " + req.params.itineraryId,
        });
      }
    } else
      res.status(200).send({ message: `Itinerary was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (res) => {
  SugestedItinerary.removeAll((err) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all itineraries.",
      });
    else res.send({ message: `All Itinerary were deleted successfully!` });
  });
};

const Itinerary = require("../models/createItinerario.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  if (!req) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a User
  const itinerary = new Itinerary({
    name: req.body.name,
    country: req.body.country,
    city: req.body.city,
    date: req.body.date_creation,
    accommodation: req.body.accommodation,
    breakfast: req.body.breakfast,
    morningActivity: req.body.morningActivity,
    lunch: req.body.lunch,
    activityAfterLunch: req.body.activityAfterLunch,
    dinner: req.body.dinner,
    nightActivity: req.body.nightActivity,
    comments: req.body.comments,
    user_id: req.body.user_id,
  });

  // Save User in the database
  Itinerary.create(itinerary, (err, data) => {
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
  Itinerary.getAll((err, data) => {
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
  Itinerary.findById(req.params.itineraryId, (err, data) => {
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

  const itinerary = new Itinerary({
    name: req.body.name,
    country: req.body.country,
    city: req.body.city,
    date_connection: req.body.date,
    accommodation: req.body.accommodation,
    breakfast: req.body.breakfast,
    morningActivity: req.body.morningActivity,
    lunch: req.body.lunch,
    activityAfterLunch: req.body.activityAfterLunch,
    dinner: req.body.dinner,
    nightActivity: req.body.nightActivity,
    comments: req.body.comments,
  });
  Itinerary.updateById(req.params.itineraryId, itinerary, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found itinerary with id ${req.params.itineraryId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating itinerary with id " + req.params.itineraryId,
        });
      }
    } else res.send(data);
  });
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Itinerary.remove(req.params.itineraryId, (err) => {
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
  Itinerary.removeAll((err) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all itineraries.",
      });
    else res.send({ message: `All Itinerary were deleted successfully!` });
  });
};

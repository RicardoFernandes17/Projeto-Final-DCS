const Rating = require("../models/rating.model.js");

exports.create = (req, res) => {
  if (!req) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const rating = new Rating({
    rating_value: req.body.rating_value,
    itinerary: req.body.itinerario_id,
    user: req.body.user_id,
  });

  // Save User in the database
  Rating.create(rating, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating rating.",
      });
    else res.send(data);
  });
};
exports.findAll = (req, res) => {
  Rating.getAll((err, data) => {
    if ((!req, err))
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Itineraries.",
      });
    else res.send(data);
  });
};

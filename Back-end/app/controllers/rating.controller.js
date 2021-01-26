const Rating = require("../models/rating.model.js");

exports.create = (req, res) => {
  const rating = new Rating({
    rating_id: req.body.rating_id,
    rating_value: req.body.rating_value,
    itinerario_id: req.body.itinerario_id,
    user_id: req.body.user_id,
  });
  Rating.create(rating, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating rating.",
      });
    else res.send(data);
  });
  if (!req) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Save rating on database
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

exports.Average = (req, res) => {
  Rating.getAverage((err, data) => {
    if ((!req, err))
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Itineraries.",
      });
    else res.send(data);
  });
};

// exports.getAverage = (req, res) => {
//   Rating.getAverage(req.params.itineraryId, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found itinerary with id ${req.params.itineraryId}.`,
//         });
//       } else {
//         res.status(500).send({
//           message:
//             "Error retrieving itinerary with id " + req.params.itineraryId,
//         });
//       }
//     } else res.send(data);
//   });
// };

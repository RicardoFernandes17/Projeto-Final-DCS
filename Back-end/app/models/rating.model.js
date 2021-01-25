const sql = require("./db_mysql.js");

const Rating = function (rating) {
  this.rating = rating.rating_id;
  this.rating_value = rating.rating_value;
  this.itinerario_id = rating.itinerario_id;
  this.user_id = rating.user_id;
};

Rating.create = (newRating, result) => {
  sql.query(
    "INSERT INTO rating (rating_id,rating_value,itinerario_id,user_id) VALUES (?,?,?,?)",
    [
      newRating.rating_id,
      newRating.rating_value,
      newRating.itinerario_id,
      newRating.user_id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("rating inserted: ", { id: res.insertId, ...newRating });
      result(null, { id: res.insertId, ...newRating });
    }
  );
};

Rating.getAll = (result) => {
  sql.query("SELECT * FROM rating", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("rating: ", res);
    result(null, res);
  });
};

Rating.getAverage = (itineraryId, result) => {
  sql.query(
    "SELECT rating_value AS rating from rating where itinerario_id = ?",
    [itineraryId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      result(null, res);
    }
  );
};

module.exports = Rating;

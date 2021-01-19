const sql = require("./db_mysql.js");

const Rating = function (user) {
  this.rating = user.na;
};

Rating.create = (newRating, result) => {
  sql.query(
    "INSERT INTO rating (rating_value,itinerario_id,user_id) VALUES (?,?,?)",
    [newRating.rating_value],
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

module.exports = Rating;

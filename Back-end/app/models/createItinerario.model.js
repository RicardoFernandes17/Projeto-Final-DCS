const sql = require("./db_mysql.js");

const Itinerary = function (itinerary) {
  this.name = itinerary.name;
  this.country = itinerary.country;
  this.city = itinerary.city;
  this.date_creation = itinerary.date;
  this.accommodation = itinerary.accommodation;
  this.breakfast = itinerary.breakfast;
  this.morningActivity = itinerary.morningActivity;
  this.lunch = itinerary.lunch;
  this.activityAfterLunch = itinerary.activityAfterLunch;
  this.dinner = itinerary.dinner;
  this.nightActivity = itinerary.nightActivity;
  this.comments = itinerary.comments;
  this.user_id = itinerary.user_id;
};

Itinerary.create = (newItinerary, result) => {
  sql.query(
    "INSERT INTO createitinerario (name,country,city,date_creation,accommodation,breakfast,morningActivity,lunch,activityAfterLunch,dinner,nightActivity,comments,user_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      newItinerary.name,
      newItinerary.country,
      newItinerary.city,
      newItinerary.date,
      newItinerary.accommodation,
      newItinerary.breakfast,
      newItinerary.morningActivity,
      newItinerary.lunch,
      newItinerary.activityAfterLunch,
      newItinerary.dinner,
      newItinerary.nightActivity,
      newItinerary.comments,
      newItinerary.user_id,
    ],

    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created itinerary: ", { id: res.insertId, ...newItinerary });
      result(null, { id: res.insertId, ...newItinerary });
    }
  );
};

Itinerary.findById = (itineraryId, result) => {
  sql.query(
    "SELECT * FROM createitinerario WHERE itinerario_id = ?",
    [itineraryId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found itinerary: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found User with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Itinerary.getAll = (result) => {
  sql.query("SELECT * FROM createitinerario", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("itineraries: ", res);
    result(null, res);
  });
};

Itinerary.updateById = (id, itinerary, result) => {
  sql.query(
    "UPDATE createitinerario SET name = ?, country = ?, city = ?, date_creation = ?, accommodation = ?, breakfast = ?, morningActivity = ?, lunch = ?, activityAfterLunch = ?, dinner = ?, nightActivity = ?, comments = ?  WHERE itinerario_id = ?",
    [
      itinerary.name,
      itinerary.country,
      itinerary.city,
      itinerary.date_creation,
      itinerary.accommodation,
      itinerary.breakfast,
      itinerary.morningActivity,
      itinerary.lunch,
      itinerary.activityAfterLunch,
      itinerary.dinner,
      itinerary.nightActivity,
      itinerary.comments,

      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated itineraries: ", { id: id, ...itinerary });
      result(null, { id: id, ...itinerary });
    }
  );
};

Itinerary.remove = (id, result) => {
  sql.query(
    "DELETE FROM createitinerario WHERE itinerario_id = ?",
    [id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted itinerary with id: ", id);
      result(null, res);
    }
  );
};

Itinerary.removeAll = (result) => {
  sql.query("DELETE FROM createitinerario", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} itineraries`);
    result(null, res);
  });
};

// Itinerary.getUserByUserEmail = (email, result) => {
//   sql.query("SELECT * FROM users WHERE user_mail = ?", [email], (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found user: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found User with the id
//     result({ kind: "not_found" }, null);
//   });
// };

module.exports = Itinerary;

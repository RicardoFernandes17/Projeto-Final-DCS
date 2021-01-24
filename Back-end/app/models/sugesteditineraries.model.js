const sql = require('./db_mysql.js');

const SugestedItinerary = function (itinerary) {
  this.name = itinerary.name;
  this.city = itinerary.city;
  this.accommodation = itinerary.accommodation;
  this.breakfast = itinerary.breakfast;
  this.morningActivity = itinerary.morningActivity;
  this.lunch = itinerary.lunch;
  this.activityAfterLunch = itinerary.activityAfterLunch;
  this.dinner = itinerary.dinner;
  this.nightActivity = itinerary.nightActivity;
};

SugestedItinerary.create = (newItinerary, result) => {
  sql.query(
    'INSERT INTO sugesteditineraries (name, city, accommodation,breakfast,morningActivity,lunch,activityAfterLunch,dinner,nightActivity) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      newItinerary.name,
      newItinerary.city,
      newItinerary.accommodation,
      newItinerary.breakfast,
      newItinerary.morningActivity,
      newItinerary.lunch,
      newItinerary.activityAfterLunch,
      newItinerary.dinner,
      newItinerary.nightActivity,
    ],

    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('created itinerary: ', { id: res.insertId, ...newItinerary });
      result(null, { id: res.insertId, ...newItinerary });
    }
  );
};

SugestedItinerary.findById = (itineraryId, result) => {
  sql.query(
    'SELECT * FROM sugesteditineraries WHERE id = ?',
    [itineraryId],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log('found itinerary: ', res[0]);
        result(null, res[0]);
        return;
      }

      // not found User with the id
      result({ kind: 'not_found' }, null);
    }
  );
};

SugestedItinerary.getAll = (result) => {
  sql.query('SELECT * FROM sugesteditineraries', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('itineraries: ', res);
    result(null, res);
  });
};

SugestedItinerary.updateById = (id, itinerary, result) => {
  sql.query(
    'UPDATE sugesteditineraries SET name = ?, date_creation = ?,  accommodation = ?, city = ?, breakfast = ? morningActivity = ? lunch = ? activityAfterLunch = ? dinner = ? nightActivity = ? comments = ?  WHERE user_id = ?',
    [
      itinerary.name,
      itinerary.date_creation,
      itinerary.accommodation,
      itinerary.city,
      itinerary.breakfast,
      itinerary.morningActivity,
      itinerary.lunch,
      itinerary.activityAfterLunch,
      itinerary.dinner,
      itinerary.nightActivity,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('updated itineraries: ', { id: id, ...itinerary });
      result(null, { id: id, ...itinerary });
    }
  );
};

SugestedItinerary.remove = (id, result) => {
  sql.query(
    'DELETE FROM sugesteditineraries WHERE id = ?',
    [id],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('deleted itinerary with id: ', id);
      result(null, res);
    }
  );
};

SugestedItinerary.removeAll = (result) => {
  sql.query('DELETE FROM sugesteditineraries', (err, res) => {
    if (err) {
      console.log('error: ', err);
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

module.exports = SugestedItinerary;

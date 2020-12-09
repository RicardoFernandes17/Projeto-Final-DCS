const sql = require("./db_mysql.js");

const User = function (user) {
  this.name = user.name;
  this.mail = user.mail;
  this.address = user.address;
  this.password = user.password;
};

User.create = (newUser, result) => {
  sql.query(
    "INSERT INTO users (user_name, user_mail, user_address, user_password) VALUES (?,?,?,?)",
    [newUser.name, newUser.mail, newUser.address, newUser.password],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    }
  );
};

User.findById = (userId, result) => {
  sql.query("SELECT * FROM users WHERE user_id = ?", [userId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};

User.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET user_name = ?, user_mail = ?, user_address = ?, user_password = ? WHERE user_id = ?",
    [user.name, user.mail, user.address, user.password, id],
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

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE user_id = ?", [id], (err, res) => {
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

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

User.removeAll = (result) => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users`);
    result(null, res);
  });
};

// User.getUserByUserEmail = (email, result) => {
//   sql.query("SELECT * FROM users WHERE user_email = ?", [email], (err, res) => {
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

module.exports = User;

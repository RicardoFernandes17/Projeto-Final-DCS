const sql = require("./db_mysql.js");

const Country = function(country) {
    this.name = country.name;

};

Country.create = (newCountry, result) => {
    sql.query("INSERT INTO cities (country_name) VALUES (?)"
    , [newCountry.name]
    , (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log("created city: ", { id: res.insertId, ...newCity });
        result(null, { id: res.insertId, ...newCity });
    });
  };
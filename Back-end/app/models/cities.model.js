const sql = require("./db_mysql.js");

const City = function(city) {
    this.name = city.name;
    //this.country = city.country; ver depois a relação
    
  };

  City.create = (newCity, result) => {
    sql.query("INSERT INTO cities (city_name) VALUES (?)"
    , [newCity.name]
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

  City.findById = (cityId, result) => {
    sql.query("SELECT * FROM cities WHERE city_id = ?"
    , [cityId]
    , (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          console.log("found city: ", res[0]);
          result(null, res[0]);
          return;
        }
    
        // not found User with the id
        result({ kind: "not_found" }, null);
    });
  };

  
  City.getAll = result => {
    sql.query("SELECT * FROM cities"
    , (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("cities: ", res);
        result(null, res);
    });
  };

  City.updateById = (id, city, result) => {
    sql.query("UPDATE cities SET city_name = ? WHERE city_id = ?"
    , [city.name, id]
    , (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated city: ", { id: id, ...city });
        result(null, { id: id, ...city });
      }
    );
  };

  City.remove = (id, result) => {
    sql.query("DELETE FROM cities WHERE cityid = ?"
    , [id]
    , (err, res) => {
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
    
        console.log("deleted city with id: ", id);
        result(null, res);
    });
  };

  City.removeAll = result => {
    sql.query("DELETE FROM cities"
    , (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        
      console.log(`deleted ${res.affectedRows} cities`);
      result(null, res);
    });
  };
  
  module.exports = City;
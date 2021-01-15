const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
// const dbconfig = require("../config/dbconfig.js");

const { genSaltSync, compareSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
// cons { getUserByUserEmail } = require("../models/user.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  /* console.log(2); */
  // Validate request
  const body = req.body;
  const salt = genSaltSync(10);
  body.user_password = hashSync(body.user_password, salt);

  if (!req) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a User
  const user = new User({
    name: req.body.user_name,
    mail: req.body.user_mail,
    address: req.body.user_address,
    password: req.body.user_password,
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else res.send(data);
  });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if ((!req, err))
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    else res.send(data);
  });
};

// Find a single User with a userId
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.userId,
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

  const user = new User({
    name: req.body.user_name,
    mail: req.body.user_mail,
    address: req.body.user_address,
    password: req.body.user_password,
  });
  User.updateById(req.params.userId, user, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating user with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  User.remove(req.params.userId, (err) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.userId,
        });
      }
    } else res.status(200).send({ message: `User was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (res) => {
  User.removeAll((err) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};

exports.login = (req, res) => {
  const body = req.body;

  /** Verifica se o utilizador existe */
  User.getUserByUserEmail(body.user_mail, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.status(404).send({ message: "User  not found" });
    }

    /** Se o utilizador existir, compara a password do input com a password do utilizador encontrado */
    bcrypt.compare(
      body.user_password,
      results.user_password,
      (err, isMatch) => {
        if (err) {
          console.log(err);
        }
        if (!isMatch) {
          return res.status(401).send({ message: "Wrong Password" });
        }
        /** Se a password estiver correta, atribui um token a esse utilizador, o 1º parametro acho que tá mal */
        const token = jwt.sign(
          { user_id: results.user_id, user_mail: results.user_mail },
          process.env.JWT_KEY,
          {
            expiresIn: "1H",
          }
        );
        var nome = results.user_name;
        return res.status(200).send({ message: "Logged in", token, nome });
      }
    );
  });
};

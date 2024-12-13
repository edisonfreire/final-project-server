/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize'); // Import Sequelize
const db = require('../db'); // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false, // Name cannot be null or empty
    validate: {
      notEmpty: true, // Ensure name is not an empty string
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false, // Address cannot be null or empty
    validate: {
      notEmpty: true, // Ensure address is not an empty string
    },
  },
  description: {
    type: Sequelize.TEXT, // Large text string
    allowNull: true, // Description is optional (null/empty allowed)
  },
  imageUrl: {
    type: Sequelize.STRING, // URL for the image
    allowNull: true, // Image URL is optional
    defaultValue: "default.jpg", // Default image URL
  },
});

// Export the campus model
module.exports = Campus;
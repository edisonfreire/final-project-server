/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize'); // Import Sequelize
const db = require('../db'); // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensure first name is not an empty string
    },
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensure last name is not an empty string
    },
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensure email is not an empty string
      isEmail: true,  // Ensure email is in a valid format
    },
  },

  imageUrl: {
    type: Sequelize.STRING, // URL for the image
    allowNull: true, // Image URL is optional
    defaultValue: "/default.jpg", // Default image URL
  },

  gpa: {
    type: Sequelize.DECIMAL(2, 1), // Decimal with precision (e.g., 3.5)
    allowNull: true, // GPA is optional
    validate: {
      min: 0.0, // Minimum GPA value
      max: 4.0, // Maximum GPA value
      isDecimal: true, // Ensure GPA is a decimal number
    },
  },
});

// Export the student model
module.exports = Student;
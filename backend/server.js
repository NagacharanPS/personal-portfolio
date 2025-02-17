const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "sql201.infinityfree.com",
  user: "if0_38334862",
  password: "DoZ1DJgImKT",
  database: "if0_38334862_portfolioDatabase",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

app.post("/signup", (req, res) => {
  const values = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  const sql =
    "INSERT INTO registration (Username, Email, Password) VALUES (?, ?, ?)";

  db.query(
    sql,
    [values.username, values.email, values.password],
    (err, results) => {
      if (err) {
        console.error("Error while inserting signup data into db:", err);
        return res.status(500).json({
          message: "Error while inserting the signup data into the db",
        });
      } else {
        console.log("signup data inserted into db:", results);
        return res
          .status(200)
          .json({ message: "signup data inserted successfully" });
      }
    }
  );
});

app.listen(7070, () => {
  console.log("Listening to port 7070");
});

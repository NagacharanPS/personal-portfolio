const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post("/", (req, res) => {
  const { message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: "nagacharanps987@gmail.com",
    subject: "New Message from Portfolio Contact Form",
    text: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending new mail");
      return res
        .status(500)
        .json({ message: "Error while sending the new mail" });
    } else {
      console.log("New mail sent:", info.res);
      return res.status(200).json({ message: "New mail sent" });
    }
  });
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});

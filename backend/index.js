const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://siddharthj1405:FFVFZ4kOScZQPxD1@cluster0.pvxygok.mongodb.net/bookbasket"
);

app.listen(port, (error) => {
  if (error) {
    console.log("Error in starting the server" + error);
  } else {
    console.log("Server started on port " + port);
  }
});

app.get("/", (req, res) => {
  res.send("Express App is Running on Port " + port);
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});


require("dotenv").config();

const express = require("express");
const router = express.Router();

const fs = require("fs");

const WriteEventLog = require("../WriteEventLog");

router.get("/result", async (req, res) => {
  fs.readFile("./database/namesHistory.json", "utf-8", (err, jsonString) => {
    if (err) {
      console.log(err);
    } else
      try {
        const data = JSON.parse(jsonString);

        const str = [
          {
            names: `${data.names}`,
          },
        ];

        res.end(JSON.stringify(str));
      } catch (err) {
        console.log("Error parsing JSON:", err);
      }
  });
});

router.post("/sendData", async (req, res) => {
  let { name } = req.body;

  WriteEventLog(name);
});

module.exports = router;

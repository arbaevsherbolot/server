require("dotenv").config();

const express = require("express");
const router = express.Router();

const fs = require("fs");

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

  fs.readFile("./database/namesHistory.json", "utf-8", (err, data) => {
    if (err) {
      console.log("As error occurred: ", err.message);
    } else {
      const dataJson = JSON.parse(data);

      let newName = ` ${name}`;
      dataJson.names.push(newName);

      fs.writeFile(
        "./database/namesHistory.json",
        JSON.stringify(dataJson),
        (err) => {
          if (err) {
            console.log("Error is:", err.message);
          } else {
            console.log("Names updated!");
          }
        }
      );
    }
  });
});

module.exports = router;

const fs = require("fs");

const WriteEventLog = async (name) => {
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
};

module.exports = WriteEventLog;

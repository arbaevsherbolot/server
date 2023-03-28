require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");
const routerHandler = require("./routes/handler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", routerHandler);

const PORT = process.env.PORT || 2006;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}.`));

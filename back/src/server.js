require("./connectDb");
const express = require("express");
const routes = require("./routes");
const cors = require("cors")
const path = require("path")

const app = express();

app.use(cors({ origin: "*" }))
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3334);

const express = require("express");
const path = require("path");
const multer = require("multer");
const api = require("../api/cars/handler");

const app = express();
const upload = multer();
const PORT = process.env.PORT || 8000;
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

// Setup Express
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(PUBLIC_DIRECTORY));
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

app.get("/cars", api.handleListCars);
app.get("/cars/create", api.handleViewCreate);
app.post("/cars", api.handleCreateCars);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

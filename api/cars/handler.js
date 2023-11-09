const cars = [];

function handleListCars(req, res) {
  res.render("cars", {
    cars: cars,
  });
}

function handleViewCreate(req, res) {
  res.render("./cars/create");
}

function handleCreateCars(req, res) {
  const hasil = req.body;
  cars.push(hasil);
  res.redirect(200, "cars");
}

module.exports = {
  handleListCars,
  handleViewCreate,
  handleCreateCars,
};

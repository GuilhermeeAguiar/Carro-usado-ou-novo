const car = {
  model: "Tesla",
  year: 2008,
  color: "blue",
  used: true
};

if (car.used === false) {
  console.log("I'm looking for a " + car.color + " " + car.year + " " + car.model  + " that is used.")
} else {
  console.log("I'm looking for a " + car.color + " " + car.year + " " + car.model  + " that is new.")
};

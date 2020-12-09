import f from "faker";

// const colors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "purple",
//   "mint green",
//   "teal",
//   "white",
//   "black",
//   "orange",
//   "pink",
//   "grey",
//   "maroon",
//   "violet",
//   "turquoise",
//   "tan",
//   "sky blue",
//   "salmon",
//   "plum",
//   "orchid",
//   "olive",
//   "magenta",
//   "lime",
//   "ivory",
//   "indigo",
//   "gold",
//   "fuchsia",
//   "cyan",
//   "azure",
//   "lavender",
//   "silver",
// ];

const cars = new Array(500).fill(null).map(() => ({
  brand: f.vehicle.manufacturer(),
  model: f.vehicle.model(),
  type: f.vehicle.type(),
  fuel: f.vehicle.fuel(),
  color: f.vehicle.color(),
  image: f.image.imageUrl(320, 240, undefined, true, true),
  images: new Array(5).fill(null).map(() => ({
    320: f.image.imageUrl(320, 240, undefined, true, true),
    640: f.image.imageUrl(640, 480, undefined, true, true),
    960: f.image.imageUrl(960, 720, undefined, true, true),
    1280: f.image.imageUrl(1280, 960, undefined, true, true),
    1600: f.image.imageUrl(1600, 1200, undefined, true, true),
  })),
  mileage: f.random.number({
    min: 0,
    max: 500000,
  }),
  gearbox: f.random.arrayElement(["Automatic", "Manual"]),
  year: f.random.number({
    min: 1980,
    max: 2020,
  }),
  price: f.random.number({
    min: 500,
    max: 50000,
  }),
  city: f.address.city(),
  registeredTill: f.date.future(1),
  drivetrain: f.random.arrayElement(["FWD", "RWD", "AWD"]),
}));

const generateMakes = (count: number) =>
  new Array(count)
    .fill(null)
    .map(() => f.vehicle.manufacturer())
    .sort();
const uniqueMakes = (makes: string[]) => [...new Set(makes)];

const generateModels = (count: number) =>
  new Array(count)
    .fill(null)
    .map(() => f.vehicle.model())
    .sort();
const uniqueModels = (models: string[]) => [...new Set(models)];

const makes = uniqueMakes(generateMakes(500));
const makeModels = makes.map((make) => ({
  make,
  models: uniqueModels(
    generateModels(
      f.random.number({
        min: 1,
        max: 10,
      })
    )
  ),
}));

export { cars, makeModels };

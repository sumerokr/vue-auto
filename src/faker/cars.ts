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

const cars = new Array(40).fill(null).map(() => ({
  brand: f.vehicle.manufacturer(),
  model: f.vehicle.model(),
  type: f.vehicle.type(),
  fuel: f.vehicle.fuel(),
  color: f.vehicle.color(),
  image: `https://via.placeholder.com/320x240.webp/${f.internet
    .color()
    .slice(1)}/${f.internet.color().slice(1)}`,
  images: new Array(5).fill(null).map(() => ({
    320: `https://via.placeholder.com/320x240.webp/${f.internet
      .color()
      .slice(1)}/${f.internet.color().slice(1)}`,
    640: `https://via.placeholder.com/640x480.webp/${f.internet
      .color()
      .slice(1)}/${f.internet.color().slice(1)}`,
    960: `https://via.placeholder.com/960x720.webp/${f.internet
      .color()
      .slice(1)}/${f.internet.color().slice(1)}`,
    1280: `https://via.placeholder.com/1280x960.webp/${f.internet
      .color()
      .slice(1)}/${f.internet.color().slice(1)}`,
    1600: `https://via.placeholder.com/1600x1200.webp/${f.internet
      .color()
      .slice(1)}/${f.internet.color().slice(1)}`,
    1920: `https://via.placeholder.com/1920x1440.webp/${f.internet
      .color()
      .slice(1)}/${f.internet.color().slice(1)}`,
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

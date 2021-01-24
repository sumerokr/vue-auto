import f from "faker";
import { Car, Tag } from "@/types";

//#region makes
const generateMakes = (count: number): string[] =>
  new Array(count)
    .fill(null)
    .map(() => f.vehicle.manufacturer())
    .sort();
const uniqueMakes = (makes: string[]): string[] => [...new Set(makes)];
export const makes: string[] = uniqueMakes(generateMakes(100));
//#endregion

//#region modelsByMake
const generateModels = (count: number): string[] =>
  new Array(count)
    .fill(null)
    .map(() => f.vehicle.model())
    .sort();
const uniqueModels = (models: string[]): string[] => [...new Set(models)];

export const modelsByMake = makes.reduce((acc, make) => {
  acc[make] = uniqueModels(
    generateModels(
      f.random.number({
        min: 2,
        max: 10,
      })
    )
  );
  return acc;
}, {} as { [make: string]: string[] });
//#endregion

//#region cars
const generateCar = (): Car => {
  const make = f.random.arrayElement(makes);
  const model = f.random.arrayElement(modelsByMake[make]);
  const ownerType = f.random.arrayElement(["business", "person"]);
  const aDate = new Date();
  const monthsToAdd = f.random.number({
    min: 1,
    max: 12,
  });
  aDate.setMonth(aDate.getMonth() + monthsToAdd);
  const ownerName =
    ownerType === "business" ? f.company.companyName() : f.name.firstName();
  const registeredTillMonth = aDate.getMonth() + 1;
  const registeredTillYear = aDate.getFullYear();
  const tags: Tag[] = [
    {
      name: "First owner",
      color: "rgb(254, 226, 226)",
    },
    {
      name: "No crashes",
      color: "rgb(209, 250, 229)",
    },
    {
      name: "Registered",
      color: "rgb(219, 234, 254)",
    },
  ].filter(() => Math.random() >= 0.75);

  return {
    id: f.random.uuid(),
    make,
    model,
    images: new Array(8)
      .fill(null)
      .map(() => `https://via.placeholder.com/16x9.webp/DBEAFE?text=+`),
    type: f.vehicle.type(),
    fuel: f.vehicle.fuel(),
    color: f.vehicle.color(),
    mileage: f.random.number({
      min: 0,
      max: 500000,
    }),
    gearbox: f.random.arrayElement(["Automatic", "Manual"]),
    month: f.random.number({
      min: 0,
      max: 11,
    }),
    year: f.random.number({
      min: 1980,
      max: 2020,
    }),
    price: f.random.number({
      min: 500,
      max: 50000,
    }),
    power: f.random.number({
      min: 50,
      max: 500,
    }),
    drivetrain: f.random.arrayElement(["FWD", "RWD", "AWD"]),
    city: f.address.city(),
    ownerType,
    ownerName,
    registeredTillMonth,
    registeredTillYear,
    tags,
    createdAt: f.date.recent(30),
  };
};

export const cars = new Array(500).fill(null).map(generateCar);
//#endregion

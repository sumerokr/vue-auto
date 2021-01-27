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
const photos = [
  [
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F01_960x720.jpeg?alt=media&token=ea886114-04bb-4bf4-920a-bb59320034d7",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F02_960x720.jpeg?alt=media&token=f13fe59d-a702-443e-8fca-e1d0e3ba0091",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F03_960x720.jpeg?alt=media&token=64d560dd-0d6a-42a6-a632-d18178572fbb",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F04_960x720.jpeg?alt=media&token=5a951510-d5ba-4f78-b8fa-c47a7baa85d5",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F05_960x720.jpeg?alt=media&token=ee18b3af-d99f-4999-8cf6-ffabfd575625",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F06_960x720.jpeg?alt=media&token=7af592eb-5d1d-4c85-9fea-4bef8746ce59",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F07_960x720.jpeg?alt=media&token=d8b127bd-dd33-48e2-9e0c-54f20b579d43",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F08_960x720.jpeg?alt=media&token=4728c6fd-8eb4-41e0-a2eb-0ddb2b89f2e4",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/stelvio%2F09_960x720.jpeg?alt=media&token=0329afbc-01dd-41c3-bf1f-6da3fd1ddd7c",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F01_960x720.jpeg?alt=media&token=82dc147d-080c-43bb-a17d-9d862fe56b02",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F02_960x720.jpeg?alt=media&token=38b3fee0-e2c3-4f3f-ade9-4ed786ea43ce",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F03_960x720.jpeg?alt=media&token=80a8c2be-c490-4bfe-bec7-77243a9dda2a",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F04_960x720.jpeg?alt=media&token=083eec18-4607-45f7-abda-33571adb6303",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F05_960x720.jpeg?alt=media&token=eca04762-13a6-4cfc-9e06-837269d7b9ce",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/polo%2F06_960x720.jpeg?alt=media&token=36a9f27e-b0e3-4b11-93ea-7596e3762756",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F01_960x720.jpeg?alt=media&token=8fbba2cb-1557-49da-bf18-6ce41de632c3",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F02_960x720.jpeg?alt=media&token=73deec01-2065-43e2-95fc-352d11644039",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F03_960x720.jpeg?alt=media&token=b8c8b62f-41c5-43ba-a05f-6607e6261783",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F04_960x720.jpeg?alt=media&token=f658486a-8ae2-4575-bcac-bda36671f1bf",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F05_960x720.jpeg?alt=media&token=ab4c1d0f-eff1-4c69-a9a0-81bc5c8d0f68",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F06_960x720.jpeg?alt=media&token=29bf43b4-39c4-4f41-9fd5-6592a71ea4b7",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/focus%2F07_960x720.jpeg?alt=media&token=218402d4-6aec-464f-8b04-acffd1ad64df",
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F01_960x720.jpeg?alt=media&token=0b7a7c77-975a-4705-b2a8-ed57899bd654",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F02_960x720.jpeg?alt=media&token=0f5c7dec-7957-4ff1-8654-4260c7f06b55",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F03_960x720.jpeg?alt=media&token=daae6315-2b88-4487-b1b4-b1ffda8a8d41",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F04_960x720.jpeg?alt=media&token=cf10bb57-dbeb-4955-893d-025f572f0701",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F05_960x720.jpeg?alt=media&token=5faeedb3-4fd1-46c8-93ab-09b077d61c03",
    "https://firebasestorage.googleapis.com/v0/b/vue-auto.appspot.com/o/golf%2F06_960x720.jpeg?alt=media&token=97125881-7765-4b9c-a41a-efa0f08614d3",
  ],
];

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
  const optionCategories = ["Comfort", "Multimedia", "Safety", "Extra"];
  const optionContent = optionCategories.map((oc) => ({
    category: oc,
    items: new Array(
      f.random.number({
        min: 3,
        max: 10,
      })
    )
      .fill(null)
      .map(() => f.random.words()),
  }));

  return {
    id: f.random.uuid(),
    make,
    model,
    images: f.random.arrayElement(photos),
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
    options: optionContent,
    createdAt: f.date.recent(30),
  };
};

export const cars = new Array(500).fill(null).map(generateCar);
//#endregion

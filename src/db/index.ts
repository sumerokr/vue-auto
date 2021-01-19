import f from "faker";

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

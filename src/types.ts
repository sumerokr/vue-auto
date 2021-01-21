export type MakesModelsItem = {
  make: string;
  models: string[];
};

export type SortOption = {
  key: string;
  title: string;
};

export type Tag = {
  name: string;
  color: string;
};

export type Car = {
  id: string;
  make: string;
  model: string;
  type: string;
  fuel: string;
  color: string;
  mileage: number;
  gearbox: string;
  month: number;
  year: number;
  price: number;
  power: number;
  drivetrain: string;
  city: string;
  ownerType: string;
  ownerName: string;
  registeredTillMonth: number;
  registeredTillYear: number;
  tags: Tag[];
};

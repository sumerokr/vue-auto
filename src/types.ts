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
  [index: string]: any;
  id: string;
  make: string;
  model: string;
  images: string[];
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
  createdAt: Date;
};

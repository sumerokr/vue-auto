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

export type Option = {
  category: string;
  items: string[];
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
  options: Option[];
  createdAt: Date;
};

export type searchParams = {
  make: string;
  model: string;
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxYear: number;
  minMileage: number;
  maxMileage: number;
};

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
  make?: string | null;
  model?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  minYear?: number | null;
  maxYear?: number | null;
  minMileage?: number | null;
  maxMileage?: number | null;
  gearbox?: string | null;
  fuel?: string | null;
};

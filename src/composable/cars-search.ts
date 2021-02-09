import { searchParams } from "@/types";

const searchParams: searchParams = {
  make: null,
  model: null,
  minPrice: null,
  maxPrice: null,
  minYear: null,
  maxYear: null,
  minMileage: null,
  maxMileage: null,
  gearbox: null,
  fuel: null,
};

export const useCarsSearch = () => searchParams;

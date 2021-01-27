import { getCars, getCar } from "@/services/cars";
import { useFetcher } from "@/composable/fetcher.ts";

export const useCars = () => {
  const { state, data, error, isLoading, send } = useFetcher(getCars);
  return { state, data, error, isLoading, send };
};

export const useCar = () => {
  const { state, data, error, isLoading, send } = useFetcher(getCar);
  return { state, data, error, isLoading, send };
};

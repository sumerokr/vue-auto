import { getCars } from "@/services/cars";
import { useFetcher } from "@/composable/fetcher.ts";

export const useCars = () => {
  const { state, data, error, isLoading, send } = useFetcher(getCars);
  return { state, data, error, isLoading, send };
};

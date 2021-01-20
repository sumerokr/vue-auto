import { getMakes, getModels } from "@/services/make-models";
import { useFetcher } from "@/composable/fetcher.ts";

export const useMakes = () => {
  const { state, data, error, isLoading, send } = useFetcher(getMakes);
  return { state, data, error, isLoading, send };
};

export const useModels = () => {
  const { state, data, error, isLoading, send } = useFetcher(getModels);
  return { state, data, error, isLoading, send };
};

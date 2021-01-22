import { Car } from "@/types";

const getCars = async (): Promise<Car[]> => {
  return fetch("/api/cars", {
    method: "POST",
  }).then((res) => res.json());
};

export { getCars };

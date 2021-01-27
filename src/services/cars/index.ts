import { Car, searchParams } from "@/types";

const getCars = async ({
  filter,
  sort: { sortKey, sortDirection },
}: {
  filter: searchParams | undefined;
  sort: {
    sortKey: string;
    sortDirection: string;
  };
}): Promise<Car[]> => {
  return fetch("/api/cars", {
    method: "POST",
    body: JSON.stringify({
      filter,
      sort: {
        sortKey,
        sortDirection,
      },
    }),
  }).then((res) => res.json());
};

const getCar = async (id: string): Promise<Car> => {
  return fetch(`/api/cars/${id}`, {
    method: "GET",
  }).then((res) => res.json());
};

export { getCars, getCar };

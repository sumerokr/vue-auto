import { Car } from "@/types";

const getCars = async ({
  sort: { sortKey, sortDirection },
}: {
  sort: {
    sortKey: string;
    sortDirection: string;
  };
}): Promise<Car[]> => {
  return fetch("/api/cars", {
    method: "POST",
    body: JSON.stringify({
      sort: {
        sortKey,
        sortDirection,
      },
    }),
  }).then((res) => res.json());
};

export { getCars };

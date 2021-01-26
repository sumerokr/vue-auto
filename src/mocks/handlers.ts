import { rest } from "msw";
import { makes, modelsByMake, cars } from "@/db";
import { Car } from "@/types";

export const handlers = [
  rest.get("/api/makes", (req, res, ctx) => {
    return res(ctx.delay(), ctx.status(200), ctx.json(makes));
  }),

  rest.get("/api/models", (req, res, ctx) => {
    const make = req.url.searchParams.get("make");
    if (make) {
      return res(ctx.delay(), ctx.status(200), ctx.json(modelsByMake[make]));
    } else {
      return res(ctx.delay(), ctx.status(400));
    }
  }),

  rest.post("/api/cars", (req, res, ctx) => {
    if (!req.body || typeof req.body !== "string") {
      const sliced = cars.slice(-20);
      return res(ctx.delay(), ctx.status(200), ctx.json(sliced));
    }

    const body: {
      filter?: object;
      sort?: { sortKey: string; sortDirection: string };
    } = JSON.parse(req.body);
    let resulted: Car[] = cars.slice();

    if (body.filter) {
      const filterOptions = Object.entries(body.filter);
      resulted = resulted.filter((car) => {
        return filterOptions.every(([key, value]) => {
          if ([null, ""].includes(value)) {
            return true;
          }
          if (["make", "model"].includes(key)) {
            return car[key] === value;
          } else if (["minPrice", "minYear", "minMileage"].includes(key)) {
            const resolvedKey = key.slice(3).toLowerCase();
            return car[resolvedKey] >= Number(value);
          } else if (["maxPrice", "maxYear", "maxMileage"].includes(key)) {
            const resolvedKey = key.slice(3).toLowerCase();
            return car[resolvedKey] <= Number(value);
          }
          return car[key] === value;
        });
      });
    }

    if (body.sort) {
      const { sortKey, sortDirection } = body.sort;
      resulted = resulted.sort((a, b) => {
        if (sortKey === "year" && a[sortKey] - b[sortKey] === 0) {
          return sortDirection === "asc"
            ? a["month"] - b["month"]
            : b["month"] - a["month"];
        }
        return sortDirection === "asc"
          ? a[sortKey] - b[sortKey]
          : b[sortKey] - a[sortKey];
      });
    }

    return res(ctx.delay(), ctx.status(200), ctx.json(resulted.slice(0, 20)));
  }),
];

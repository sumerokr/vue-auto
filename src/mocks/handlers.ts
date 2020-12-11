import { rest } from "msw";
import { cars } from "@/faker/cars";

export const handlers = [
  rest.get("/api/cars", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cars.slice(0, 20)));
  }),
];

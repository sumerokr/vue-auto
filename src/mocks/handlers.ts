import { rest } from "msw";
import { makes, modelsByMake } from "@/db";

export const handlers = [
  rest.get("/api/makes", (req, res, ctx) => {
    return res(ctx.delay(), ctx.status(200), ctx.json(makes));
  }),

  rest.get("/api/models", (req, res, ctx) => {
    console.log(req);

    const make = req.url.searchParams.get("make");
    if (make) {
      return res(ctx.delay(), ctx.status(200), ctx.json(modelsByMake[make]));
    } else {
      return res(ctx.delay(), ctx.status(400));
    }
  }),
];

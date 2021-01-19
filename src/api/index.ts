import { delay } from "@/utils";

type endpoints = {
  [url: string]: {
    [method: string]: (body?: any) => any;
  };
};

const endpoints: endpoints = {
  "/make-models": {
    GET: () => [""],
  },
};

const ffetch = async (
  url: string,
  options: {
    method: "GET" | "POST";
    body?: object;
  } = {
    method: "GET",
  }
): Promise<any> => {
  delay(300);
  switch (options.method) {
    case "GET":
      return endpoints[url][options.method]();

    case "POST":
      return endpoints[url][options.method](options.body);
  }
};

export { ffetch };

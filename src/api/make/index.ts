import db from "@/db";

export const makes = (q: string) => {
  return db.makes.filter((m: string) =>
    m.toLowerCase().includes(q.toLowerCase())
  );
};

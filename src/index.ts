import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";

import connectDb from "./db/connectDb.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript with express and mongoose");
});

connectDb();

app.listen(port, () => console.log(`Server is running on ${port}`));

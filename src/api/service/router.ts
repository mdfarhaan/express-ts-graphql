import { Router, Request, Response } from "express";
import { readData, addData } from "./controller";

export const serviceRouter = (): Router => {
  const app = Router();

  app.get("/", async (req: Request, res: Response) => {
    const result = await readData();
    res.status(200).json({ status: 200, message: "success", result });
  });

  app.post("/", async (req: Request, res: Response) => {
    const result = await addData();
    res.status(result.status).json(result);
  });

  return app;
};

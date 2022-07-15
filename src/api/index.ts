import { Router, Request, Response } from "express";
import { serviceRouter } from "./service/router";

export default (): Router => {
  const app = Router();
  app.use("/service", serviceRouter());
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ status: 200, message: "success" });
  });
  return app;
};

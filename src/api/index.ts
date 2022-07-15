import { Router, Request, Response } from "express";

export default (): Router => {
  const app = Router();
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ status: 200, message: "success" });
  });
  return app;
};

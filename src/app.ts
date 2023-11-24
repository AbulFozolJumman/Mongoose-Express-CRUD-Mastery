import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// User routes
app.use(".api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

export default app;

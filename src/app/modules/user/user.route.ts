import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

// It will call controller function to get this data
router.post("/create-user", userControllers.createUser);

export const userRoutes = router;

import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

// It will call controller function to get this data
router.post("/create-user", userControllers.createUser);
router.get("/", userControllers.getAllUser);
router.get("/:userId", userControllers.getUser);
router.delete("/:userId", userControllers.deleteUser);

export const userRoutes = router;

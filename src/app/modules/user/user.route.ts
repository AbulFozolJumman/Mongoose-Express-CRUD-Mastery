import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

// It will call controller function to get this data
router.post("/", userControllers.createUser);
router.get("/", userControllers.getAllUser);
router.get("/:userId", userControllers.getUser);
router.put("/:userId", userControllers.updateUser);
router.delete("/:userId", userControllers.deleteUser);
router.get("/:userId/orders", userControllers.getUserOrders);

export const userRoutes = router;

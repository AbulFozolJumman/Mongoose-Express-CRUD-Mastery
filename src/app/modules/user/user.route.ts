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
router.put("/:userId/orders", userControllers.addUserOrders);
router.get("/:userId/orders/total-price", userControllers.userOrdersTotalPrice);

export const userRoutes = router;

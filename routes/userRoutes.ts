import { Router } from "express";
import { updateUserData, fetchUserData } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.put("/update-user-data/:userId", authMiddleware, updateUserData);
router.get("/fetch-user-data", fetchUserData);

export default router;

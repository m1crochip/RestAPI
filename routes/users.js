import express from "express";

import {
  createUser,
  deleteUser,
  getUser,
  getUserId,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();

//all routes in here are start with /users
router.get("/", getUser);

router.post("/", createUser);

// /user/2 => req.params { id:2 }

router.get("/:id", getUserId);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

export default router;

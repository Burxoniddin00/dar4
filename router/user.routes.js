import { Router } from "express";
import { DELETE, GET, GETID, POST, PUT } from "../controllers/users.controller.js";
export const userRouter = Router();
userRouter
  .get("/", GET)
  .get("/:id", GETID)
  .post("/", POST)
  .delete("/:id", DELETE)
  .put("/:id", PUT)
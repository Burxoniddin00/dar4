import { Router } from "express";
export const clientsRouter = Router();
import { DELETE, GET, GETID, POST, PUT } from "../controllers/clients.controller.js";

clientsRouter
  .get("/", GET)
  .get("/:id", GETID)
  .post("/", POST)
  .delete("/:id", DELETE)
  .put("/:id", PUT)

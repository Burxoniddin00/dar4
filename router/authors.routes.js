import { Router } from "express";
export const authorsRouter = Router();
import {
  DELETE,
  GET,
  GETID,
  POST,
  PUT,
} from "../controllers/authors.controller.js";

authorsRouter
  .get("/", GET)
  .get("/:id", GETID)
  .post("/", POST)
  .delete("/:id", DELETE)
  .put("/:id", PUT);

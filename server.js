import express from "express";
import { userRouter } from "./router/user.routes.js";
import {clientsRouter  } from "./router/clients.routes.js";
import { authorsRouter } from "./router/authors.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT =  5000;
app.use(express.json());
app.use("/clients", clientsRouter); 
app.use("/books", userRouter); 
app.use("/authors", authorsRouter); 
app.listen(PORT, console.log("server is running .. " + PORT));

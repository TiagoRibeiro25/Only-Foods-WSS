import cors from "cors";
import express from "express";
import http from "http";
import corsConfig from "./config/cors.config";

const app = express();
app.use(cors(corsConfig));

const server = http.createServer(app);

export default server;

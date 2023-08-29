import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import { Server } from 'socket.io';
import { expressAppCorsConfig, ioCorsConfig } from './config/cors.config';

const app = express();
app.use(cors(expressAppCorsConfig));
app.use(helmet());

const server = http.createServer(app);

const io = new Server(server, { cors: ioCorsConfig });

export { io, server };

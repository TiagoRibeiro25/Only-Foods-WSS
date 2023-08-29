import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import { Server } from 'socket.io';
import corsConfig from './config/cors.config';

const app = express();
app.use(cors(corsConfig));
app.use(helmet());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: process.env.FRONTEND_URL || '*',
	},
});

export { io, server };

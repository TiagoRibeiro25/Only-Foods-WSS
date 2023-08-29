import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import { Server } from 'socket.io';
import { expressAppCorsConfig, ioCorsConfig } from './config/cors.config';

const app = express();
app.use(cors(expressAppCorsConfig));
app.use(helmet());

const httpServer = http.createServer(app);

const io = new Server(httpServer, { cors: ioCorsConfig });

io.on('connection', socket => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

export { httpServer, io };

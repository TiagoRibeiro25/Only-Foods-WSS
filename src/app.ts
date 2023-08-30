import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import { Server, Socket } from 'socket.io';
import { expressAppCorsConfig, ioCorsConfig } from './config/cors.config';
import { handleConnection, handleDisconnection } from './events/index.events';

// Create the express app and apply the cors and helmet middlewares
const app = express();
app.use(cors(expressAppCorsConfig));
app.use(helmet());

// Create the http server and apply the express app
const httpServer = http.createServer(app);

// Create the socket.io server and apply the cors config
const io = new Server(httpServer, { cors: ioCorsConfig });

// On every connection, call "handleConnection"
io.on('connection', async (socket: Socket) => {
	await handleConnection(socket);

	socket.on('disconnect', () => {
		handleDisconnection(socket);
	});
});

export { httpServer, io };

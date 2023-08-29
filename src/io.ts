import { Server } from 'socket.io';
import app from './app';

const io = new Server(app, {
	cors: {
		origin: '*',
	},
});

export default io;

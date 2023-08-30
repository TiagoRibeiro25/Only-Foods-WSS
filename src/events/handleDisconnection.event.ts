import { Socket } from 'socket.io';

const handleDisconnection = (socket: Socket): void => {
	console.log('A user disconnected!, socket id: ' + socket.id);
};

export default handleDisconnection;

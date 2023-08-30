import { Socket } from 'socket.io';
// import mongo from '../config/mongoose.config';
import validateUser from './validateUser.event';

const handleConnection = async (socket: Socket): Promise<void> => {
	const userId = socket.handshake.query.id as string;
	const encryptedPassword = socket.handshake.query.password as string;

	console.log('A new user connected!, socket id: ' + socket.id);

	await validateUser({ userId, encryptedPassword, socket });

	socket.emit('connected');
};

export default handleConnection;

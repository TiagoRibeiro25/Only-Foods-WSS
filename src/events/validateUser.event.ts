import colors from 'colors';
import { Socket } from 'socket.io';
import redis from '../config/redis.config';

interface User {
	userData: {
		username: string;
		password: string;
		isAdmin: boolean;
		isBlocked: boolean;
	};
	tokens: string[];
}

interface validateUserProps {
	userId: string;
	encryptedPassword: string;
	socket: Socket;
}

const validateUser = async ({
	userId,
	encryptedPassword,
	socket,
}: validateUserProps): Promise<void> => {
	try {
		// Get the user from redis
		const userFound: User | null = JSON.parse(await redis.get(userId));

		// If the user was not found or the password is incorrect, disconnect the user
		if (!userFound || userFound.userData.password !== encryptedPassword) {
			console.log('User not found in redis, disconnecting user: ' + socket.id);

			socket.disconnect();
			return;
		}

		// If the user was found, log it
		console.log('User found in redis: ' + userFound.userData.username);
	} catch (error) {
		console.log(
			colors.yellow('[validateUser.event.ts] ') +
				colors.red('Error: ') +
				colors.yellow(error),
		);
		socket.disconnect();
	}
};

export default validateUser;

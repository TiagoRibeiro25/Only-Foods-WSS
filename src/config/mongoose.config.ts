import mongoose, { ConnectOptions } from 'mongoose';
import MessageModel from '../models/Message.model';
import RoomModel from '../models/Room.model';

const options: ConnectOptions = {
	authSource: 'admin',
	user: process.env.MONGOOSE_USERNAME,
	pass: process.env.MONGOOSE_PASSWORD,
};

const mongo = {
	mongoose,
	connect: async (): Promise<void> => {
		await mongoose.connect(process.env.MONGOOSE_URL, options);
	},
	Room: RoomModel,
	Message: MessageModel,
};

export default mongo;

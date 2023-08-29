import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Message',
		},
	],
	users: [
		{
			type: Number,
			required: true,
		},
	],
});

export default mongoose.model('Room', RoomSchema);

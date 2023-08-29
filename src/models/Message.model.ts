import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
	room: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Room',
	},
	user: {
		type: Number,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Message', MessageSchema);

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
	content: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('Message', MessageSchema);

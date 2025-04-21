import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	from: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
	to: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
})

export const messageModel = mongoose.model('message', messageSchema)

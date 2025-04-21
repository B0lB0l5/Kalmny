import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	socketId: {
		type: String,
		required: true,
	},
})

export const userModel = mongoose.model('user', userSchema)
